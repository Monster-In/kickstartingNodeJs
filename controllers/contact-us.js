const path=require('path');
const rootDir = require('../util/path');

exports.getContactController = (req,res) => {
    res.sendFile(path.join(rootDir,'views','contact-us.html'));
}

exports.postContactController = (req,res,next) => {
    res.direct('/');
}

