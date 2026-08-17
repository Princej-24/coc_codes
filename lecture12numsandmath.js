const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(3)); // 100.000
const balance1 = (22.389);
console.log(balance1.toPrecision(3)); // 22.4
const balance11 = (122.389);
console.log(balance11.toPrecision(3)); // 122

const hundreds = 1000000;
console.log(hundreds.toLocaleString()); // 10,00,000
console.log(hundreds.toLocaleString('en-US'));

// ----------------------MATHS-------------------------

console.log(Math.abs(-4));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.random()); // always gives values between 0 to 1
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)




