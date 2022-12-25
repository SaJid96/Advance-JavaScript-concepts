
// The call(), apply() and bind() methods are used for function borrowing in JavaScript. It means that by using them, we can use the methods of one object on a different object without having to make a copy of that method and maintain it in two separate places.

function PrintName(city,country){
    console.log(`${this.firstname} ${this.secondName} , ${city},${country}`);
}


const myName={
    firstname:'sajid',
    secondName:'Hussain'
}

Function.prototype.myCall=function(context,args)
{
    let currentContext=context || globalThis
    let randomProp=Math.random()
    while(currentContext[randomProp] !==undefined ){
        randomProp=Math.random()
    }
    currentContext[randomProp]=this
    let result=currentContext[randomProp](args)
    delete randomProp
    return result
}

PrintName.call(myName,['Delhi','India'])
PrintName.myCall(myName,['Hyderabad','Telengana'])