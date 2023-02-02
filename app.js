const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

const shopRoutes = require('./routes/shop');
const adminRoutes= require('./routes/admin');
const contactUsRoutes = require('./routes/contact-us');

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminRoutes);
app.use(shopRoutes);  //order matters
app.use(contactUsRoutes);
app.use('/success', (req,res,next) => {
    res.send(`Form successfully filled`);
});

app.use((req,res,next) => {
    res.status(404).sendFile(path.join(__dirname, 'view', '404.html'))
})

app.listen(4000);