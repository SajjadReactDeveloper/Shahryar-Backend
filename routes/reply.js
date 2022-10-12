const express = require('express');
const router = express.Router();
const replyController = require('../controller/Reply')

router.post('/sendMail', replyController.sendEmail);

module.exports = router;