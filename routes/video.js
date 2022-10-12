const express = require('express');
const router = express.Router();
const videoController = require('../controller/video');

router.post('/uploadVideos', videoController.addVideos);
router.get('/viewVideos', videoController.viewVideos);

module.exports = router;