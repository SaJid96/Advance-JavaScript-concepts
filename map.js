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

let best=companies.map((comp)=>comp.name)
console.log(best);
let temp=companies.forEach(comp=>comp.name)
console.log(temp);