const express = require('express');
const router = express.Router();
const discussionController = require('../controller/discussion');

router.post('/addQuery', discussionController.add);
router.get('/viewQuery', discussionController.view );
router.post('/addResponse/:id', discussionController.updateData );

module.exports = router;