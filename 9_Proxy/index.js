//*********************************************   Objects  **********//

const person = {
    name: 'Andrii',
    age: 38,
    job: 'Fullstack'
};

const op = new Proxy(person, {
    get(target, prop) {
        console.log(`Getting prop ${prop}`);
        return target[prop];
    },
    set(target, prop, value) {
        if (prop in target) {
            target[prop] = value;
        } else {
            throw new Error(`No ${prop} field in target`);
        }
    },
    has(target, prop) {
        return ['name', 'age', 'job'].includes(prop);
    },
    deleteProperty(target, prop) {
        console.log('Deleting...', prop);
        delete target[prop];
        return true;
    }
})

op.age = 25;
console.log(op);


const opo = new Proxy(person, {
    get(target, prop) {
        if (!(prop in target)) {
            return prop
                .split('_')
                .map(p => target[p])
                .join(' ')
        }
    }
})

console.log(opo.age_job_name)


//********************************************  Functions  *******//

const log = text => `Log: ${text}`

const fp = new Proxy(log, {
    apply(target, thisArg, argArray) {
        return target.apply(thisArg, argArray).toUpperCase();
    }
})

let s = fp('i love');
console.log(s);


//*********************************************  Classes  *********//

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const PersonProxy = new Proxy(Person, {
    construct(target, argArray) {
        console.log('Construct...');

        return new Proxy(new target(...argArray), {
            get(t, prop) {
                console.log(`Getting prop: ${prop}`)
                return t[prop]
            }
        })
    }
})


const p = new PersonProxy('Andrii', 38);
console.log(p);
console.log(p.name);