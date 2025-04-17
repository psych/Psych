const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Invalid email format'],
  },
  firstName: {
    type: String,
    required: [true, 'FirstName is required'],
    unique: true,
    minlength: [3, 'Minimum FirstName length is 3 characters'],
    maxlength: [20, 'Maximum FirstName length is 20 characters'],
  },
  lastName: {
    type: String,
    required: [true, ' LastName is required'],
    unique: true,
    minlength: [3, 'Minimum LastName length is 3 characters'],
    maxlength: [20, 'Maximum LastName length is 20 characters'],
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [6, 'Minimum password length is 6 characters'],
  },
  role: {
    type: String,
    enum: ['student', 'teacher', 'psychologist', 'admin'],
  },
  profilePicture: {
    type: String,
    default: '', // URL to the profile picture
  },
  appointments: [{
    type: mongoose.Schema.Types.ObjectId,
    // ref: 'Appointment'
  }],
  articlesRead: [{
    type: mongoose.Schema.Types.ObjectId,
    // ref: 'Article'
  }],
}, {timestamps: true});



const User = mongoose.model('User', userSchema);
module.exports = User;
