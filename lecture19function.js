function saymyname(){
    console.log("P")
    console.log("R")
    console.log("I")
    console.log("N")
    console.log("C")
    console.log("E")
}
// saymyname // reference
saymyname() // execution 

function add(n1,n2){
    console.log(n1+n2)
}
const n3=add(1,2) // it will print 3 but it will return undefined
console.log(n3) // undefined 
// this is because maine function k ander return nhi kia tho JS by default undefined leleta h 
// const n3 = add(1,2) is equivalent to const n3 = undefined 

// fixing it 
function add(n1,n2){
    return n1+n2;
}

const result = add(1,2);

console.log(result);