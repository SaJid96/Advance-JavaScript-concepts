const obj={
    name:'kevin',
    getName:function(){
        return this.name 
       },
       getRoll:function(){
        return this.roll
       }
}
console.log(obj);

const obj2={
    roll:98,
    name:'priya',
    __proto__:obj

}
console.log(obj2.getRoll());

