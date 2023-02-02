const express = require('express');
const fs = require('fs');

const app = express();

const loginRoutes= require('./routes/admin');
const messageRoutes = require('./routes/shop');

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));

app.get("/", (req,res) => {
    fs.readFile("username.txt", (err,data)=>{
        if(err){
            console.log(err);
            data='No chat exists'
        }
        res.send(
            `${data} <form action="/"
            onsubmit="document.getElementById('username').value=localStorage.getItem('username')" method="POST">
                    <input id="message" name="message" type="text">
                    <input type="hidden" name="username" id="username">
                    <br/>
                    <button type="submit">send</button>
                </form>`
        );
    })
})

app.post("/", (req,res) => {
    console.log(req.body.username);
    console.log(req.body.message);

    fs.writeFile("username.txt",`${req.body.username} : ${req.body.message}`, {flag:'a'}, (err) => err ? console.log(err):res.redirect("/"));
});

app.get("/login", (req,res) => {
    res.send(`<form action="/" method="POST" onsubmit="localStorage.setItem('username', document.getElementById('username').value)">
            <input id="username" placeHolder="username" type="text" name="username">
            <br/>
            <button type="submit">login</button></form>`);
});

app.listen(4000);