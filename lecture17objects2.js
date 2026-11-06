const instauser=new Object() // Singleton object
console.log(instauser) // {}

const instauser1={} // outputs are same the only diff is that this is non singleton object
instauser1.id="Prince"
instauser1.age="22"
instauser1.sex="male"
console.log(instauser1) // { id: 'Prince', age: '22', sex: 'male' }


const obj1={1:"one",2:"two",3:"three"}
const obj2={4:"four",5:"five",6:"six"}
// const obj3=Object.assign(obj1,obj2) // merge using assign
const obj3 = {...obj1 , ...obj2} // merge using spread
console.log(obj3)

const users=[
    {
        email:"jjfjiowijf,if@gmail.com"
    },

    {
        //
    },

    {
        //
    }
]
users[0].email // we can access by this 

console.log(Object.keys(users)) // iska data types arrays rehega 
console.log(Object.values(users)) // same 
console.log(Object.entries(users))
console.log(users[0].hasOwnProperty('email'))