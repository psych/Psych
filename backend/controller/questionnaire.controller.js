const Questionnaire = require('../models/questionnaire.model');

exports.createQuestionnaire = async (req, res, next) => {
  try {
    const { userId, answers } = req.body;

    if (!userId || !answers) {
      return res.status(400).json({ error: 'userId and answers are required' });
    }

    // Create the questionnaire document
    const questionnaire = await Questionnaire.create({ userId, answers });
    res.status(201).json({
      message: 'Questionnaire submitted successfully',
      data: questionnaire
    });
  } catch (error) {
    next(error);
  }
};
