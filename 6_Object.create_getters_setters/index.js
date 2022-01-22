const person = Object.create(
    {
        calculateAge() {
            console.log('Age:', new Date().getFullYear() - this.birthYear)
        }
    }, {
        name: {
            value: 'Andrii',
            enumerable: true,
            configurable: true,
            writable: true
        },
        birthYear: {
            value: 1983
        },
        age: {
            get() {
                return new Date().getFullYear() - this.birthYear
            },
            set(value) {
                document.body.style.background = 'red';
                console.log('Set age', value);
            }
        }
    })

for (const key in person) {
    if (person.hasOwnProperty(key)) {
        console.log('KEY', key, person[key])
    }
}

person.name = 'Roma';
person.birthYear = 1999;
console.log(person);

delete person.name;

console.log(person);

console.log(person.age);

person.calculateAge();