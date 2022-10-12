const express = require('express');
const router = express.Router();
const fileController = require('../controller/files');
const uploadFile = require('../middleware/uploadFile')

router.post('/uploadFsc', fileController.addFsc);
router.post('/addFile', fileController.addFile);
router.get('/viewApplicants', fileController.viewApplicants);
router.post('/update', fileController.update);

module.exports = router;