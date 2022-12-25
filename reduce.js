import {ages} from './company.js'

let total=ages.reduce((acc,cur)=>acc+cur,0)
console.log(total);
