// primitive datatypes -> all primitive data types are call by value 
//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // false because id and anotherid  is different because of symbol property 

// creation of object 
let myObj = {
    name: "Prince",
    age: 21,
}

// creation of func
const myFunction = function(){
    console.log("Hello world");
}
const outsidetemp = null;

console.log(typeof anotherId); // symbol
// data type of null is object and of bigInt is undefined 
// non-primitive is also called referrence type 
// js is dynamically typed languague 
// non-primitive data types are : array,functions,objects




