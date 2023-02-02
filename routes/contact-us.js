const express = require('express');
const path=require('path');
const rootDir= require('../util/path');
const router = express.Router();

router.get('/contact-us',(req,res,next) => {
    res.sendFile(path.join(rootDir, 'views', 'contact-us.html'));
});


module.exports= router;