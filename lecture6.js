let score = "33abc" //$

console.log(typeof score);
console.log(typeof(score)); // same as above

let valueInNumber = Number(score) // conversion in number 
console.log(typeof valueInNumber);
console.log(valueInNumber);

//$
// "33" => 33
// "33abc" => NaN(not a num)
// null => 0
// undefined => NaN
// true => 1; false => 0
// prince => NaN 

let isLoggedIn = "prince"

let booleanIsLoggedIn = Boolean(isLoggedIn)
 console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "prince" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber); // 33 
console.log(typeof stringNumber); // string