const express = require('express');
const router = express.Router();
const jobController = require('../controller/jobs');

router.post('/addJob', jobController.add);
router.get('/viewJobs', jobController.view);
router.post('/searchbylocation', jobController.searchByLocation);
router.get('/searchbyDate', jobController.searchByDate);
router.post('/searchbyName', jobController.searchByCompanyName);

module.exports = router;