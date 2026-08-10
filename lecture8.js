// console.log("2" > 1); // true
// console.log("02" > 1); // true

console.log(null==0) // false
console.log(null>0) // false
console.log(null>=0) // true
console.log(undefined>=0) // undefined in any case will give false 
console.log("2"=== 0) // strict check checks value and data type also 

// null == undefined → true
/* null == 0         → false
null == false     → false
null == ""        → false */ 

// js treats == and ( <,>,>=,<= ) differently == means loose equality and  in the case of ( <,>,>=,<= ) js treats null as a num

