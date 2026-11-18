// foreach loop does not return any values so undefined 


// Filter 
// The filter() method in JavaScript is used to create a new array containing only those elements that satisfy a given condition
const nums = [1,2,3,4,5,6,7,8,9,0] 
const newnums=nums.filter((nums)=>nums>4)
console.log(newnums); // [ 5, 6, 7, 8, 9 ]

const nums1 = [1,2,3,4,5,6,7,8,9,0] 
const newnums1=nums1.filter((nums1)=>{
    nums1>4})
console.log(newnums1); // it will return [] because we declared condition in curly braces means we started scope so we must return the value 


const nums11 = [1,2,3,4,5,6,7,8,9,0] 
const newnums11=nums11.filter((nums11)=>{
    return nums11>4}) // return value
console.log(newnums11);



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const userBooks = books.filter( (bk) => bk.genre === 'History')
  console.log(userBooks);
// same thing but with return value
  const userBooks1 = books.filter( (bk) => {return bk.genre === 'History'})
  console.log(userBooks);
  
  // foreach , filter , map these all are call back function 



  // map
  const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  const newNums = myNumers.map( (num) => { return num + 10})
  console.log(newNums);
  
//   const newNums = myNumers
//                 .map((num) => num * 10 )
//                 .map( (num) => num + 1)
//                 .filter( (num) => num >= 40)

// console.log(newNums);


// ---------------- reduce -------------------
// The reduce() method in JavaScript is used to reduce an entire array into a single value


// syntax
// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;

// const sumWithInitial = array1.reduce(
//     (accumulator, currentValue) => accumulator + currentValue,
//     initialValue
// );

// console.log(sumWithInitial);

// // Expected output: 10




// example
const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`); // to check ki ho kya rha h accumulator and currentvalue k sath 
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0) // 0 yha pr initial value h // same thing return as this line as given above

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);
  