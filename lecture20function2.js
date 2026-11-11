function calculateCartPrice(num1){
    return num1
}
console.log(calculateCartPrice(2,3,4)) // this will give output only 2 , to fix it we will use rest operator

function calculateCartPrices(...num1){
    return num1
}
console.log(calculateCartPrices(2,3,4)) // [ 2, 3, 4 ] 


function calculateCartPrice1(val1,val2,...num1){
    return num1
}
console.log(calculateCartPrice1(2,3,4,5,6)) // [ 4, 5, 6 ] , because val1 takes 2 and val2 takes 3

// concept
const user={
    username:"Prince",
    userid:24
}
function socialmedia(anyobject){
    console.log(`username is ${anyobject.username} and userid is ${anyobject.userid}`)
}
// socialmedia(user) // here u can pass your own object 
socialmedia({
    username:"Jaiswal",
    userid:"25"
}) // output = username is Jaiswal and userid is 25


// now return array

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray)); // 400
console.log(returnSecondValue([30,20,10,234])) // 20 , here u can pass your own array

