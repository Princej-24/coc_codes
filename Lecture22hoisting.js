addone(5) // this will not give error
function addone(num){
    return num+1
}


addtwo(5) // this will give error because here we store the addtwo function in numbers // this is called hoisting
const numbers = function addtwo(num){
    return num+2
}