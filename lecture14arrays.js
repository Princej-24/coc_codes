// In JS arrays are resizable
// can contain a mix of different data types 

const array=[0,1,2,3,4,5]
array.unshift(9) // it will add 9 in the beginning of the array 
console.log(array)
array.shift(9) // it will give the original array 
console.log(array)


const newArr = array.join() // it will give the array elements in string formate like 0,1,2,3,4,5
console.log(newArr)
console.log(typeof newArr) // string

// slice will not print the last value but splice will 
// splice will permanently cut the whole part from the real part 

// example
const myarr = [6,7,8,9,0]
console.log(myarr.splice(0,2)) // [ 6, 7 ]
console.log(myarr) // [ 8, 9, 0 ] 
