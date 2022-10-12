const express = require('express');
const router = express.Router();
const pdfController = require('../controller/pdf');
const uploadFile = require('../middleware/uploadFile')

router.post('/uploadFiles', pdfController.addFiles);
router.get('/viewFiles', pdfController.viewFiles);

module.exports = router;