const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// one more way to declare string 
const gameName = new String("prince")
console.log(gameName[0]);
// accessing prototype
console.log(gameName.__proto__); // {} it is representing console display and this is not empty 
console.log(gameName.indexOf('i'))
const newString = gameName.substring(0,4); // here you cannot give negative value , if you give negative value this will consider as index 0 
console.log(newString); // prin
const new1String = gameName.slice(-4,4); //here you can give negative value 
console.log(new1String); // in
const new2String = "    Jaiswal    " ; 
console.log(new2String.trim()); // Jaiswal
const url = "princepj2524";
console.log (url.replace('25','00'));
console.log(url.includes('pri')); // true 
const newlevel = ("prince-jaiswal-pj-24");
console.log(newlevel.split('-'));






