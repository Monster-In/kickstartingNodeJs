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

const http = require('http');
const server = http.createServer((req, res) => {
 res.writeHead(200, { 'Content-Type': 'text/plain' });
 res.end('Hello World\n');
});

server.listen(4000, () => {
 console.log('Hi, I am Tej');
});