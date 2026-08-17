console.log(Date()); // returns string
let myDate = new Date(); // it creates a Date Object
console.log(myDate); // output in ISO format
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(typeof myDate); // object

let myCreatedDate = new Date(2026, 0, 18); // month starts from 0 
let myCreatedDate1 = new Date(2026, 0, 18, 7, 5);

// ---------------------TIME-------------------------

let timeStamp = Date.now();
console.log(timeStamp); // time from 1st Jan 1970 in milisec
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000)); // to convert milisec into sec

let day1 = new Date ();
console.log(day1.getMonth());
// if we click ctrl+spacebar then it shows all the properties

// to costomize names like MON -> MONDAY

//// day1.toLocaleString('default', {
////     weekday: "long",
    
//// });
//// console.log(day1);

let day2 = new Date();

let formattedDay = day2.toLocaleString('default', {
    weekday: "long",
});

console.log(formattedDay);
