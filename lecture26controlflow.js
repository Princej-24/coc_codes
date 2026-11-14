// in switch , if we don't mention break statement then it will run the whole lines of code instead of the last one which is default case
// Falsy Values 
// -0,false,0,null,Nan,"",undefined,BigInt(0n) , except these all others are truthy values


// checking if array is empty or not 
const email=[]
if(email.length==0){
    console.log("Array is Empty");
    
}

// checking if object is empty or not 
const school={}
if(Object.keys(school.length==0)){
    console.log("Object is Empty");
}



// Nullish Coalescing Operator (??)
// here all values r compared with only two : null and undefined 
let val;
val = 1 ?? 2 // 1
val=null ?? 1 // 1
val=undefined ?? 2 // 2
val=null ?? 10 ?? 20 // 10
console.log(val);

// Ternary Operator
// condition ? true : false statement9

switch (key) {
    case value:
        
        break;

    default:
        break;
}