const citiesUkraine = ['Lviv', 'Kyiv', 'Odessa', 'Kharkiv'];
const citiesEurope = ['Milan', 'Paris', 'Krakow'];

console.log(...citiesUkraine);
console.log(citiesEurope);

const citiSpread = [...citiesUkraine, ...citiesEurope];
console.log(citiSpread);

const citiesUkraineWithPopulation = {
    Lviv: 10,
    Kyiv: 20,
    Odessa: 7,
    Kharkiv: 15
};
const citiesEuropeWithPopulation = {
    Lviv: 20,
    Milan: 13,
    Paris: 8,
    Krakow: 7
};

console.log({...citiesUkraineWithPopulation});
console.log({...citiesEuropeWithPopulation, ...citiesUkraineWithPopulation});
console.log({...citiesUkraineWithPopulation, ...citiesEuropeWithPopulation});

///===============   Practice   =====//

console.log(Math.max(2, 31, 42, 18));

const numbers = [2, 31, 42, 18];
console.log(Math.max(...numbers));

const divs = document.querySelectorAll('div');
console.log(divs, Array.isArray(divs));
const nodes = [...divs];
console.log(nodes, Array.isArray(nodes));

///===============================================   Rest   ====================================================//

function sum(a, b, ...rest) {
    return a + b + rest.reduce((a, i) => a + i, 0)
}

const num = [1, 2, 3, 4, 5, 6, 7, 8];

///             Spread !!
console.log(sum(...num));

const [a, b, ...other] = num;
console.log(a, b, other);

//===============================================//

const person = {
    name: 'Andrii',
    age: 38,
    city: 'Lviv',
    country: 'Ukraine'
};

const {name, age, ...address} = person;
console.log(name, age, address);