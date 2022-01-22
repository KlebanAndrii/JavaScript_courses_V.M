function createCalkFunction(n) {
    return function () {
        console.log(1000 * n)
    }
}

let calkFunction = createCalkFunction(42);
calkFunction();

//========================================================//

function createIncrementor(n) {
    return function (num) {
        return console.log(n + num)
    }
}

const addOne = createIncrementor(1);
const addTen = createIncrementor(10);

console.log(addOne(41));
console.log(addTen(32));

//=========================================================//

function urlGenerator(domain) {
    return function (url) {
        return `https://${url}.${domain}`
    }
}

const comUrl = urlGenerator('com');
const uaUrl = urlGenerator('ua');

console.log(comUrl('google'));

//============================================================//

function bind(context, fn) {
    return function (...args) {
        fn.apply(context, args);
    }
}

function logPerson() {
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
}


const person1 = {name: 'Taras', age: 42, job: 'Frontend'};
const person2 = {name: 'Semen', age: 34, job: 'Dev'};

bind(person1, logPerson)();
bind(person2, logPerson)();