const people = [
    {name: 'Andrii', age: 38, budget: 80000},
    {name: 'Roma', age: 17, budget: 5000},
    {name: 'Olga', age: 32, budget: 60000},
    {name: 'Nazar', age: 25, budget: 12000},
    {name: 'Lily', age: 16, budget: 18000},
    {name: 'Georg', age: 43, budget: 55000}
];

//ForEach
people.forEach(value => console.log(value))

//Map
let mapPerson = people.map(value => value.age * 3);
console.log(mapPerson);

//Filter
let filterPerson = people.filter(value => value.age >= 18);
console.log(filterPerson);

//Reduce
let reducePerson = people.reduce((total, person) => total + person.budget, 0);
console.log(reducePerson);

//Find
let findPerson = people.find(value => value.name === 'Nazar');
console.log(findPerson);

//FindIndex
let findIndexPerson = people.findIndex(value => value.name === 'Lily');
console.log(findIndexPerson);

//======================//======================//===================//===================//

const person = people
    .filter(value => value.budget > 30000)
    .map(value => {
        return {info: `${value.name} (${value.age})`, budget: value.budget}
    })
    .reduce((total, value) => total + value.budget, 0)

console.log(person);