let num=[7,2,3,4]
// splice
// num.splice(1,2,'*','pop')
// console.log(num);

let pum=32;

// find
let re=num.find(value=>value<pum)
console.log(re);

// findIndex
let pre=num.findIndex(value=>value<pum)
console.log(pre);
// includes
console.log(
    num.includes(3),
    num.indexOf(3),
    num.push(27,65,43),
    num.length,
    typeof num,
    Array.isArray(num),
    num instanceof Array,
    num.concat(66,'hello'),
    num.reverse(),
    num.every(val=>val>pum),
    num.some(val=>val>pum)
    );
