const arr=[20,77,4,7,2,9,0,6,88,45,26,75,97]
// for(val of arr){
//     if(val>20){
// cap.push(val)


//     }
// }

// arr.forEach(val=> val>20 ? console.log(val):console.log('null'))
let companies = [
    {
        name: 'Google',
        category: 'product based',
        start: '1987',
        end: '2022'
    },
    {
        name: 'Amazon',
        category: 'product based',
        start: '1947',
        end: '2002'
    }, {
        name: 'Infosys',
        category: 'service based',
        start: '1939',
        end: '2037'
    }, {
        name: 'mindTreee',
        category: 'service based',
        start: '1999',
        end: '2011'
    }, {
        name: 'Wipro',
        category: 'product based',
        start: '1920',
        end: '2020'
    },
]
let nasa=arr.filter(val=>val>20)
console.log(nasa);

let serviceBased=companies.filter(comp=>comp.category ==='service based')
console.log(serviceBased);