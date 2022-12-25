const arr=[1,2,3,4]

function getNums(a,b,...rest){

    console.log(a,b);
    console.log(rest);

}

getNums(1,2,3,4,5,6,7,8)

// object

var Student={
    name:'sajid',
    age:66,
    hobbies:['football','cricket']
}

const {...rest}=Student
console.log(rest);

