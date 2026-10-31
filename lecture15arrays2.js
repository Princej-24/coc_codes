const arr1=[1,2,3]
const arr2=[1,24,3]
arr1.push(arr2) 
console.log(arr1) // [ 1, 2, 3, [ 1, 24, 3 ] ] 
console.log(arr1[3][1]) // 24


const myarr=[1,2,3]
const yourarr=[1,24,3]
const arr3= myarr.concat(yourarr) 
console.log(arr3) // [ 1, 2, 3, 1, 24, 3 ]


const allnewarrays = [...myarr , ...yourarr]
console.log(allnewarrays) // [ 1, 2, 3, 1, 24, 3 ] // spread operator


const realarray = [1,2,[3,4,5],6,7,[8,9,0]]
const fakearray = realarray.flat(Infinity)
console.log(fakearray)

console.log(Array.from("Prince")) // [ 'P', 'r', 'i', 'n', 'c', 'e' ] 

console.log(Array.from({name:"Prince"})) // [ ] , because Array.from() cannot directly convert a normal object into an array of its properties



let score1= "Prince"
let score2= "Jaiswal"
let score3= "PJ"
console.log(Array.of(score1,score2,score3)) // [ 'Prince', 'Jaiswal', 'PJ' ]
