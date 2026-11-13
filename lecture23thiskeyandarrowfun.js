// this keyword refers to the current context 
// example

const player1={
    playername:"Prince",
    playerid:123,

    playingstyle: function(){
        console.log(this.playername) // this keyword is referring to the current context
        
    }
}
player1.playingstyle() // Prince
console.log(this); // {} empty Object , because we r in node environment , but if u will run this in browser console u will get Window Object because in browser there is a Object named Window Object 


function one(){
    let username = "Prince"
    console.log(this.username);
}
one() // this will give undefined q ki this keyword ko jaise hmne object m use kia h usko hm yha function m vaise use nhi kr skte with dot operator



const hii = () => { // this is called arrow function 
    let username = "Prince"
    console.log(this.username);
}
hii() // undefined



// () => {} , this is arrow function 
// example
const addthree = (num1,num2,num3) => {
    return num1+num2+num3
}
console.log(addthree(1,2,3)) // 6

// one more way to use arrow fun called implicit return 

const add = (num1,num2,num3) => num1+num2+num3
// const add = (num1,num2,num3) => (num1+num2+num3)
console.log(add(1,2,3)) // 6


const add2 = (num1,num2,num3) => ({userid:"Prince"}) // here we have to use parenthesis 
console.log(add2())