var Student={
    name:'sajid',
    age:66,
    hobbies:['football','cricket']
}

var ironMan={
    ...Student
}

console.log(ironMan);

const arr=[1,2,3,4]

function getNums(a,b,c,d){

    console.log(a,b);

}

getNums(...arr)