// In JavaScript, objects can be created in two ways: Object Literal and Object Constructor
// constructor s banega tho singleton banega 
// Singleton means an object for which only ONE instance exists 

Object.create // this is made by constructor

// Object Literal
const student={
    name:"Prince",
    age:22,
    "Full Name":"Prince Jaiswal" // this will accessed by only square notation 
} // by Literals

console.log(student.name) // accessing 
console.log(student["name"]) // another way of accessing called square notation 


const mySymbol=Symbol("Key1") // using Symbol
const student1={
    name:"Prince",
    age:22,
    [mySymbol]:"yoursymbol" //
}
console.log(student1[mySymbol])

student1.age="23"
console.log(student1.age)
Object.freeze(student1) // yha pr ye object freeze hogya h ab change krna chahoge tho nhi hoga , lets change 
student1.age="24"
console.log(student1.age) // abhi bhi iska output 23 hi ayega q ki object freeze ho chuka h 


student.greeting=function(){
    console.log("Hello bro");
}
console.log(student.greeting) // [Function (anonymous)] , means function execute nhi hua h bs uska reference aya h 


student.greeting=function(){ // adding a function in student object 
    console.log("Hello bro"); // Hello bro
}
console.log(student.greeting()) // undefined
console.log(student) // it will give 
/*
{
  name: 'Prince',
  age: 22,
  'Full Name': 'Prince Jaiswal',
  greeting: [Function (anonymous)] // this is added
}
  */


// this keyword
student.greeting=function(){ 
    console.log(`Hello bro,${this.name}`); // Hello bro,Prince
}
console.log(student.greeting())
