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
    last:'chopra',
    __proto__:obj

}
console.log(obj2.getRoll());

const obj3={
    movie:'Avataaar',
    __proto__:obj2

}
console.log(obj3.getName());

const names=['kiran']
console.log(names);
// object prototype
const object=new Object()
console.log(object);
// array prototype
const array=new Array()
console.log(array);
// Function
const newfunc=  new function () {
    
}
console.log(newfunc);

Array.prototype.show=function(){
    return this
}
const cities=['Goa']

console.log(cities.show());

Array.prototype.cToO=function(){
    let newObj={}
    this.forEach(element=>newObj[element]=element)
    return newObj


}







console.log(cities.cToO());

function MyProto(name){
    this.name=name;
}

MyProto.prototype=obj2
const improv=new MyProto('neymar')

console.log(improv.last);