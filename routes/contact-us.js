const express = require('express');

const router = express.Router();

const contactController  = require('../controllers/contact-us');

router.get('/contact-us', contactController.getContactController);
router.post('/contact-us',contactController.postContactController);


module.exports= router;