// const product=(a,b)=> a*b;

// console.log(product(11,2));

// const student={
//     name:'Tej',
//     age:23,
//     greet(){console.log("Hi, I'm "+this.name);}
// };

// student.greet();

// class Student{
//     constructor(name,age,marks){
//         this.name=name;
//         this.age=age;
//         this.marks=marks;
//     }

//     setPlacementAge(minPlacementAge){
//         console.log(this);
//         return (minMarks) => {
//             if(this.marks>minMarks && this.age>minPlacementAge){
//                 console.log(this.name+" is ready for placements");
//             }
//             else{
//                 console.log(this.name+" is not ready for placements");
//             }
//         }
//     }
// }

// const Tej = new Student('tej',23,90);

// Tej.setPlacementAge(18)(40);

// const array = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon'];
// const transformedArray = array.map(x => x === ' ' ? 'empty string' : x);
// console.log(transformedArray);



// const http = require('http');
// const server = http.createServer((req, res) => {
//  res.writeHead(200, { 'Content-Type': 'text/plain' });
//  res.end('Hello World\n');
// });

// server.listen(4000, () => {
//  console.log('Hi, I am Tej');
// });

// const http = require('http');

// const server = http.createServer((req, res) => {
//   if (req.url === '/home') {
//     res.end('Welcome home');
//   } else if (req.url === '/about') {
//     res.end('Welcome to About Us page');
//   } else if (req.url === '/node') {
//     res.end('Welcome to my Node Js project');
//   } else {
//     res.end('404 Not Found');
//   }
// });

// server.listen(3000, () => {
//   console.log('Namasthe');
// });

// const http=require('http');
// const fs=require('fs');
// const server=http.createServer((req,res)=>{ 
//   const url=req.url;
//   const method=req.method;
//   if(url==="/"){
//     res.write('<html>');
//     res.write('<head><title>Enter message</title></head>');
//     res.write('<body><form action="/message" method="POST"></form><input type="text" name="message"><button type="submit">send</button></body>');
//     res.write('</html>');
//     return res.end();
//   }
//   else if(url==="/message" && method==="POST"){
//     const body=[];
//     req.on('data',(chunk)=>{
//       console.log(chunk);
//       body.push(chunk);
//     });
//     return req.on('end',()=>{
//       const parsedBody=Buffer.concat(body).toString();
//       console.log('parsedBody',parsedBody);
//       const message= parsedBody.split('=')[1];
//       fs.writeFile('hello.txt',message,(err) => {
//         console.log('fs.write file');
//         res.statusCode= 302;
//         res.setHeader('location','/');
//         return res.end();
//       });   
//     })  
//   }
//   else{
//     res.setHeader('Content-Type','text/html');
//     res.write('<html>');
//     res.write('<head><title>My First Page</title></head>');
//     res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
//     res.write('</html>');
//     res.end();
//     }
//   })

// server.listen(3000);

// const http=require('http');
// const fs = require('fs');
// const server = http.createServer((req, res) => {
//     const url = req.url;   
//     if(url === "/")
//     {      
//         const filePath = path.join(__dirname,"hello.txt");
//         fs.readFile(filePath, {encoding: "utf-8"}, (err,data) => {
//           if(err){
//             console.log(err);
//           }
//           console.log('data from file'+ data);
//           res.write('<html>');
//           res.write('<head><title>"Enter a message"</title></head>');
//           res.write('<body> ${data} </body>');
//           res.write('<body><form action="/message" method="POST"><input type="text" name="messages"><button type="submit">send</button></form></body>');
//           res.write('</html>');
//           return res.end();
//         })     
//     }
//     if(url === '/message' && req.method === 'POST'){
//         const body = [];
//         req.on('data', (chunk)=>{    
//             console.log(chunk);   
//             body.push(chunk);             
//         })
//         return req.on('end', () => {
//             const parsedBody = Buffer.concat(body).toString();
//             const message = parsedBody.split('=')[1];
//             fs.writeFile('message.txt', message, (err) =>{               
//                     console.log(err);
//                     res.statusCode = 302;                     
//                     res.setHeader('Location','/');              
//                     return res.end();
//             });
//         });
//     }
//     res.setHeader('Content-Type', 'text/html');
//     res.write('<html>');
//     res.write('<head><title>My first page</title></head>');
//     res.write('<body><h1>Hello from my Node.js Server! </h1></body>');
//     res.write('</html>');
//     res.end();
// });

// server.listen(4000);

