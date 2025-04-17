const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
  questionNumber: {
    type: Number,
    required: [true, 'Question number is required']
  },
  selectedAnswer: {
    type: String,
    required: [true, 'Selected answer is required']
  }
}, { _id: false });

const questionnaireSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'User reference is required']
  },
  answers: {
    type: [answerSchema],
    required: [true, 'Answers are required'],
    validate: {
      validator: function(v) {
        return Array.isArray(v) && v.length === 3;
      },
      message: 'Exactly 3 answers are required'
    }
  }
}, {
  timestamps: true,
});

const Questionnaire = mongoose.model('Questionnaire', questionnaireSchema);
module.exports = Questionnaire;

