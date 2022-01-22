function* strGenerator() {
    yield 'H'
    yield 'e'
    yield 'l'
    yield 'l'
    yield 'o'
}

const str = strGenerator();

console.log(str.next());
console.log(str.next().value);
console.log(str.next());
console.log(str.next());
console.log(str.next());
console.log(str.next());

//========================================================//

function* numberGen(n = 10) {
    for (let i = 0; i < n; i++) {
        yield i
    }
}

const num = numberGen(5);

console.log(num.next());
console.log(num.next());
console.log(num.next());
console.log(num.next());
console.log(num.next());
console.log(num.next());

//===========================================================//

const iterator = {
    gen(n = 10) {  // gen -> [Symbol.iterator] -- then it is possible -- for (let k of iterator) {}
        let i = 0
        return {
            next() {
                if (i < n) {
                    return {value: ++i, done: false}
                }
                return {value: undefined, done: true}
            }
        }
    }

}

const itr = iterator.gen();

console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());

//==========================================================//

function* iter(n = 10) {
    for (let i = 0; i < n; i++) {
        yield i;
    }
}

for (const k of iter(5)) {
    console.log(k)
}
