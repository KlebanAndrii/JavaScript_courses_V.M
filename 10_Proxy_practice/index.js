//====================   Wrapper   =========//

const withDefaultValue = (target, defaultValue = 0) => {
    return new Proxy(target, {
        get: (obj, prop) => (prop in obj ? obj[prop] : defaultValue)
    })
}

const position = withDefaultValue({x: 24, y: 42}, 0);
console.log(position);


//======================   Hidden properties   ========//

const withHiddenProps = (target, prefix = '_') => {
    return new Proxy(target, {
        has: (obj, prop) => prop in obj && !prop.startsWith(prefix),
        ownKeys: obj => Reflect.ownKeys(obj).filter(p => !p.startsWith(prefix)),
        get: (obj, prop, receiver) => (prop in receiver ? obj[prop] : void 0)
    })
}

const data = withHiddenProps({
    name: 'Andrii',
    age: 38,
    _uid: '433221'
})

console.log(data);
console.log(data._uid);

//==========================   Optimization   ==============//


const IndexedArray = new Proxy(Array, {
    construct(target, [argArray]) {
        const index = {}
        argArray.forEach(item => (index[item.id] = item))

        return new Proxy(new target(...argArray), {
            get(arr, prop) {
                switch (prop) {
                    case 'push':
                        return item => {
                            index[item.id] = item
                            arr[prop].call(arr, item)
                        }
                    case 'findById':
                        return id => index[id]
                    default:
                        return arr[prop]
                }
            }
        })
    }
})

const users = new IndexedArray([
    {id: 1, name: 'Andrii', job: 'Frontend', age: 38},
    {id: 2, name: 'Roma', job: 'Backend', age: 25},
    {id: 3, name: 'Olga', job: 'Student', age: 21},
    {id: 4, name: 'Taras', job: 'Fullstack', age: 42}
])

const yuriy = {id: 5, name: 'Yuriy', job: 'Fullstack', age: 33}

console.log(users);
console.log(users[0]);
users.push(yuriy);
console.log(users[4]);
let findById = users.findById(4);
console.log(findById);