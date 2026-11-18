// for of loop
// syntax
// for (const variable of iterable) {
//     // code to execute
// }

// variable → Stores the current value
// iterable → Array, string, etc



// example
// const arr = [10, 20, 30, 40, 50];

// for (const num of arr) {
//     // console.log(num);
// }


// maps stores unique values 
const map = new Map()
map.set("UK","United Kingdom")
map.set("LA","Los Angeles")
map.set("SA","South Africa")
// console.log(map)
// for (const key of map) {
//     console.log(key);
    
// }
//          or 
// for (const [key,value] of map) {
//     console.log(key,value)
// }

// objects are not iterable through for of loop , it is iterable through for in loop 

// syntax of for in loop 
// for (const key in object) {
//     // code to execute
// }

// example
const student = {
    name: "Prince",
    age: 22,
    branch: "CSE"
};

for (const key in student) {
    console.log(key);
}

// or            
for (const key in student) {
    console.log(student[key]);
}

// for in loop always by default print keys
// maps are not iterable through for in loops


// for each loop 
const coding = ["js", "ruby", "java", "python", "cpp"];

coding.forEach(function (val) { // just remove the function name 
    console.log(val);
});

coding.forEach((val)=> { // for each with arrow fun
    console.log(val);
});


// print me function 
function printMe(item) {
    console.log(item);
}

coding.forEach(printMe);