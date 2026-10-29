// console.log("2" > 1); // true
// console.log("02" > 1); // true

// we have to avoid these types of conversion 
console.log(null==0) // false
console.log(null>0) // false
console.log(null>=0) // true // this will convert it into number 
console.log(undefined>=0) // undefined in any case will give false 
console.log("2"=== 0) // strict check checks value and data type also 

// null == undefined → true
/* null == 0         → false
null == false     → false
null == ""        → false */ 

// js treats == and ( <,>,>=,<= ) differently == means loose equality and  in the case of ( <,>,>=,<= ) js treats null as a num

