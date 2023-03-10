const express = require('express');
const router = express.Router();
const successController = require('../controllers/success.js');

router.use('/success', successController.getSuccess);

module.exports = router;