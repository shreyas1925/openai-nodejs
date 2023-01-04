const express = require('express');
const { generateImage } = require('../controllers/OpenAIController');
const router = express.Router();

router.post('/generateImage', generateImage)

module.exports = router;