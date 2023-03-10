const http=require('http');
const fs = require('fs');
const server = (req, res) => {
    const url = req.url;   
    if(url === "/")
    {      
        const filePath = path.join(__dirname,"hello.txt");
        fs.readFile(filePath, {encoding: "utf-8"}, (err,data) => {
          if(err){
            console.log(err);
          }
          console.log('data from file'+ data);
          res.write('<html>');
          res.write('<head><title>"Enter a message"</title></head>');
          res.write('<body> ${data} </body>');
          res.write('<body><form action="/message" method="POST"><input type="text" name="messages"><button type="submit">send</button></form></body>');
          res.write('</html>');
          return res.end();
        })     
    }
    if(url === '/message' && req.method === 'POST'){
        const body = [];
        req.on('data', (chunk)=>{    
            console.log(chunk);   
            body.push(chunk);             
        })
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, (err) =>{               
                    console.log(err);
                    res.statusCode = 302;                     
                    res.setHeader('Location','/');              
                    return res.end();
            });
        });
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My first page</title></head>');
    res.write('<body><h1>Hello from my Node.js Server! </h1></body>');
    res.write('</html>');
    res.end();
};


module.exports = {server};
exports.server=server;