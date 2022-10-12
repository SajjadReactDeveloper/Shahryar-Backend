const express = require('express');
const router = express.Router();
const paperRouter = require('../controller/paper');

router.post('/addPaper', paperRouter.addFiles);
router.get('/viewPaper', paperRouter.viewFiles);

module.exports = router;