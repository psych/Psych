const User = require('../models/user.model');
const cloudinary = require('../utils/cloudinary');
const bcrypt = require('bcrypt');
const CustomException = require('../utils/CustomException'); // CustomException import
const saltRounds = 10;

const authRegister = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  // Check if all fields are provided
  if (!firstName || !lastName || !email || !password) {
    throw new CustomException('All fields are required!', 400);
  }

  // Check if file (profile picture) is provided
  if (!req.file) {
    throw new CustomException('Profile picture is required!', 400);
  }

  try {
    // Hash the password
    const hash = await bcrypt.hash(password, saltRounds);

    // Upload image buffer to Cloudinary
    const uploadResult = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        {
          resource_type: 'image',
          folder: 'profile_pictures',
        },
        (error, result) => {
          if (error) {
            return reject(new CustomException('Cloudinary upload failed', 500));
          }
          resolve(result);
        }
      );
    });

    // If upload succeeds, create the user
    const user = new User({
      firstName,
      lastName,
      email,
      password: hash,
      profilePicture: uploadResult.secure_url,
    });

    // Save user to the database
    await user.save();

    return res.status(201).json({
      error: false,
      message: 'New user created!',
      userId: user._id,
    });
  } catch (error) {
    // Handle all errors with CustomException
    if (error instanceof CustomException) {
      return res.status(error.status).json({
        error: true,
        message: error.message,
      });
    }

    console.error('Registration error:', error);
    return res.status(500).json({
      error: true,
      message: 'Something went wrong during registration!',
    });
  }
};

module.exports = { authRegister };
