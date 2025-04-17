const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { JWT_SECRET, NODE_ENV } = process.env;
const cloudinary = require('../utils/cloudinary');
const getDataUri = require('../utils/datauri');
const CustomException = require('../utils/CustomException');
const saltRounds = 10;

const authRegister = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
  
    if (!firstName || !lastName || !email || !password) {
      return res.status(400).send({
        error: true,
        message: 'All fields are required!',
      });
    }
  
    try {
      const hash = await bcrypt.hash(password, saltRounds);
  
      if (!req.file) {
        throw CustomException('Profile picture is required', 400);
      }
  
      const fileUri = getDataUri(req.file);
      const uploadResult = await cloudinary.uploader.upload(fileUri.content, {
        resource_type: 'image',
      });
  
      if (!uploadResult?.secure_url) {
        throw CustomException('Unable to upload image to Cloudinary', 500);
      }
  
      const user = new User({
        firstName,
        lastName,
        email,
        password: hash,
        profilePicture: uploadResult.secure_url,
      });
  
      await user.save();
  
      return res.status(201).send({
        error: false,
        message: 'User registered successfully!',
        userId: user._id,
      });
    } catch (error) {
      console.error('Registration Error:', error);
  
      if (error.message.includes('E11000')) {
        return res.status(400).send({
          error: true,
          message: 'Email already registered!',
        });
      }
  
      return res.status(error.status || 500).send({
        error: true,
        message: error.message || 'Something went wrong!',
      });
    }
};

const authLogin = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).send({
            error: true,
            message: 'Email and password are required!',
        });
    }

    try {
        const user = await User.findOne({ email });

        if (!user) {
            throw CustomException('Check email or password!', 404);
        }

        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            throw CustomException('Check email or password!', 401);
        }

        const { password: pwd, ...data } = user._doc;

        const token = jwt.sign(
            { _id: user._id},
            JWT_SECRET,
            { expiresIn: '7d' }
        );

        const cookieConfig = {
            httpOnly: true,
            sameSite: NODE_ENV === 'production' ? 'none' : 'strict',
            secure: NODE_ENV === 'production',
            maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
            path: '/',
        };

        return res
            .cookie('accessToken', token, cookieConfig)
            .status(202)
            .send({
                error: false,
                message: 'Login successful!',
                user: data,
            });
    } catch ({ message, status = 500 }) {
        return res.status(status).send({
            error: true,
            message,
        });
    }
};

const authLogout = async (req, res) => {
    return res.clearCookie('accessToken', {
        sameSite: 'none',
        secure: true,
    }).send({
        error: false,
        message: 'User has been logged out!',
    });
};

const authStatus = async (req, res) => {
    try {
        const user = await User.findById(req.userID).select('-password');

        if (!user) {
            throw CustomException('User not found!', 404);
        }

        return res.send({
            error: false,
            message: 'User status fetched successfully!',
            user,
        });
    } catch ({ message, status = 500 }) {
        return res.status(status).send({
            error: true,
            message,
        });
    }
};

module.exports = {
    authRegister,
    authLogin,
    authLogout,
    authStatus,
};
