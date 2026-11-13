// IIFE - Immediately Invoked Function Expressions 
// It is a function that executes immediately after it is defined, without needing to call it separately
// to reduce global scope pollution

(function one(){ // also called named IIFE
    console.log("Prince");
    
})(); // yha pr semicolon jaruri hai lagana q ki agar hme dushra IIFE use krna hai tho pehle wale ko end krna padega semicolon lga kr 



// another way
(() => { // Unnamed IIFE
    console.log("Prince");
    
})(); // IIFE with arrow function 



// another way
((name) => {
    console.log(name);
    
})("Prince");