const express = require('express');
const router = express.Router();
const testController = require('../controller/test');

router.post('/addTest', testController.addTest);
router.get('/viewTest', testController.viewTest);
router.post('/findTest', testController.findTest);

module.exports = router;