"use strict"

const myMAp=new Map([['a1','sadio'],['a2','fermino'],['a3','salaha']])

console.log(myMAp);
console.log(myMAp.set('a2','sadio'),myMAp.get('a3'));

for(let [key,value] of myMAp){
    console.log(`keys ${key} ,values ${value}`);
}

const wm=new WeakMap()
const ob1={"name":"shika"};
const ob2={};
wm.set(ob1,'sefar')
wm.set(ob2,'prefari')

console.log(wm,wm.has(ob1));
