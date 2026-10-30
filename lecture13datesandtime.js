let myDate = new Date()
console.log(myDate) // 2026-10-29T16:44:28.956Z 
console.log(myDate.toString()) // Thu Oct 29 2026 22:19:31 GMT+0530 (India Standard Time)
console.log(typeof myDate) // object 


let myCreatedDate = new Date(2026,9,29) // month will start with 0 in JS
console.log(myCreatedDate.toDateString()) // Thu Oct 29 2026

let myCreatedDate1 = new Date(2026,9,29,10,26) // (2026,9,29,22,26)
console.log(myCreatedDate1.toLocaleString()) // 29/10/2026, 10:26:00 am


let myCreatedDate2 = new Date("2026-01-29") // here month will start with 01
console.log(myCreatedDate1.toLocaleString()) // 29/10/2026, 10:26:00 am


let myTimeStamp = Date.now() // time stamp used in like in quizes,polls
console.log(myTimeStamp) // it will give the milisec
console.log(myCreatedDate.getTime()) // it will give the current time in milisec 
console.log(Date.now())


let newDate = new Date()
console.log(newDate.getMonth()) // 9 = current month 


let newnewDate = newDate.toLocaleString('default',{ // to customize own date 
    weekday:"long" // to print full name like Monday not just Mon
})
console.log(newnewDate) // Thursday