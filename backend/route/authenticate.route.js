const express = require('express');
const { authLogin, authLogout, authRegister, authStatus } = require('../controller/auth.controller');
const { authenticate } = require('../middleware/authenticate.middleware');
const upload = require('../middleware/multer.middleware');

const router = express.Router();

// Register
router.post('/register', upload.single('profilePicture'), authRegister);

// Login
router.post('/login', authLogin);

// Logout
router.post('/logout', authLogout);

// Check Auth status
// router.get('/me', authenticate, authStatus);

module.exports = router;
