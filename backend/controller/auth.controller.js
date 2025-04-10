const User = require('../models/user.model');
const { CustomException } = require('../utils/CustomException');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const satelize = require('satelize');
const { JWT_SECRET, NODE_ENV } = process.env;
const saltRounds = 10;

const authRegister = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    if (!firstName || !lastName || !email || !password) {
        return res.status(400).send({
            error: true,
            message: 'All fields are required!',
        });
    }

    const ipList = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const ips = ipList.split(',');

    try {
        const hash = await bcrypt.hash(password, saltRounds);

        const countryData = await new Promise((resolve, reject) => {
            satelize.satelize({ ip: ips[0] }, (error, payload) => {
                if (error) reject(error);
                else resolve(payload);
            });
        });

        const country = countryData?.country || 'India';

        const user = new User({
            firstName,
            lastName,
            email,
            password: hash,
            country
        });

        await user.save();
        console.log(user);
        return res.status(201).send({
            error: false,
            message: 'New user created!',
        });
    } catch (error) {
        console.error('Error saving user:', error);

        if (error.message.includes('E11000')) {
            return res.status(400).send({
                error: true,
                message: 'Email is already registered!',
            });
        }

        return res.status(500).send({
            error: true,
            message: 'Something went wrong during registration!',
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
