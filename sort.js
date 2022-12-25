import {companies} from './company.js'


let genralSort=companies.sort((c1,c2)=>(c1>c2 ? 1:-1))
let sorted=companies.sort((c1,c2)=>c1.start-c2.start)
console.log(sorted);
console.log(genralSort);