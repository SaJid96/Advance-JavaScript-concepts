"use strict"

let myArray=[1,2,3,4]
let obj=new Set(myArray);
console.log(obj);
console.log(obj.add(5),obj.size);
// console.log(obj.delete(5),obj);

// adding object
const obj1={
    name:'sajid'
}

console.log(obj.add(obj1));
// clear
// console.log(obj.clear());
console.log(obj.has(2));

// loop

for(let dam in obj){
    console.log("hahaha"+dam);
}

obj.forEach(el=>console.log(el))
