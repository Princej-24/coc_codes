const college={
    collegename:"ABES",
    collegenumber:123456789
}
console.log(college.collegename) // this is one way
// same we can do with another way also 

// object de structuring 
const{collegename}= college
console.log(collegename)
       // or 
const{collegename:school}= college // yha pr colon k bad tum kuch bhi apne taraf s name de skte ho fhir usko call krna hoga 
console.log(school)       


// structure of JSON 
// API
// {
//     "name":"prince",
//     "rollnumber":1234,
// }

// APIs in the form of array also 
[
    {

    },

    {

    }
]


// example = randomuser me api
// tools = JSON Formatter