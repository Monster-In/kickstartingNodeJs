const express = require('express');
const app = express();
app.use((req,res,next) => {
    console.log('into the middleware');
    next();
});

app.use((req,res,next) => {
    console.log('into the 2nd middleware');
    res.send('<h1>Hello from Express!</h1>');
});

app.listen(4000);