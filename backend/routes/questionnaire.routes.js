const express = require('express');
const router = express.Router();
const questionnaireController = require('../controller/questionnaire.controller');

// POST /api/questionnaire
router.post('/', questionnaireController.createQuestionnaire);

module.exports = router;
