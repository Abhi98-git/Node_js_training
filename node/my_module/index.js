

const  mymodule = require('./my-mod');
const Person = require('./person');
const circle = require('./circle');
const square = require('./square') ;

console.log('index_file: ', mymodule()) ;
const p1 = new Person("Abhisek", "Sahoo");
p1.display();



console.log( "The area of a circle: ",  circle.area(4));
console.log( "The area of a square: ",  square(4).area());

