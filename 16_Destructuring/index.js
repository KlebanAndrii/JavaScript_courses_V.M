function calculation(a, b) {
    return [
        a + b,
        a - b,
        a * b,
        a / b
    ]
}

const [sum, sub = 'No number', ...other] = calculation(42, 8)
console.log(sum);
console.log(sub);
console.log(other);


// // // Objects

const person = {
    name: 'Andrii',
    age: 38,
    address: {
        country: 'Ukraine',
        city: 'Lviv'
    }
};

const {name: firstName, age, address: {country, city}, car = 'No car'} = person;
console.log(country);
console.log(city);
console.log(car);
console.log(firstName);


// const {name, age, ...info} = person;
// console.log(name);
// console.log(age);
// console.log(info);


function logPerson({name, age}) {
    console.log(name + ' ' + age)
}

logPerson(person);