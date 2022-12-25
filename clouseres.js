// /Example1
var sum =(a)=>{

    console.log('viewers aere '+ a);
   
    var c=10
   return b=>a+b+c
}
var result=sum(8)
console.log(result(10));

// Example 2
var closure=(a,b,c)=>{

    return {

        getTwoSum:()=>a+b,
        getThreeSum:()=>a+b+c
    }
    
}


var case1=closure(2,3,4)

console.log(case1.getTwoSum());
console.log(case1.getThreeSum());
