const obj = {
    name: 'Andrii',
    age: 38,
    job: 'Fullstack'
};

const entries = [
    ['name', 'Andrii'],
    ['age', 38],
    ['job', 'Fullstack']
];

// console.log(Object.entries(obj));
// console.log(Object.fromEntries(entries));

const map = new Map(entries);
// console.log(map);
// console.log(map.get('job'));

map.set('newField', 42)
    .set(obj, 'Value of object')
    .set(NaN, 'NaN ???')

// console.log(map.get(NaN));
// console.log(map.has('job'));
// console.log(map.size);
//
// map.delete('job')
// console.log(map);
// console.log(map.has('job'));
//
// map.clear()
// console.log(map.size);

//=======================================================//

// for (const [key, val] of map) {
//     console.log(key, val)
// }

// for (const key of map.keys()) {
//     console.log(key);
// }

// for (const value of map.values()) {
//     console.log(value);
// }

// map.forEach((value, key, map) => {
//     console.log(value);
//     console.log(key);
//     console.log(map);
// })

//================================================================//

// const array = [...map];
// console.log(array);

// const array = Array.from(map);
// console.log(array);

// const mapObj = Object.fromEntries(map.entries());
// console.log(mapObj);

//================================================================//

const users = [
    {name: 'Roma'},
    {name: 'Olga'},
    {name: 'Victor'}
]

const visits = new Map;

visits
    .set(users[0], new Date())
    .set(users[1], new Date(new Date().getTime() + 1000 * 60))
    .set(users[2], new Date(new Date().getTime() + 5000 * 60))

function lastVisit(user) {
    return visits.get(user);
}

// console.log(lastVisit(users[0]))
// console.log(lastVisit(users[1]))
// console.log(lastVisit(users[2]))


//=============================================   SET   ===============================//

const set = new Set([1, 1, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 5, 5])

// console.log(set);
set.add(10).add(20).add(20).add(20);
// console.log(set);
// console.log(set.has(4));
// console.log(set.size);
set.delete(4);
// console.log(set);

// for (const key of set) {
//     console.log(key)
// }

//=================================================================//

function uniqValues(array) {
// return [...new Set(array)];
    return Array.from(new Set(array));
}

//console.log(uniqValues([1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5]))

//===========================================   WeakMap  ===============================================//

let objWeak = {name: 'WeakMap'};

// const arr = [objWeak];
// objWeak = null;
//
// console.log(objWeak);
// console.log(arr[0]);

const weakM = new WeakMap([
    [objWeak, 'obj data']
])
// // get set delete has

objWeak = null;
// console.log(weakM);

//======================================================//

const cache = new WeakMap();

function cacheUser(user) {
    if (!cache.has(user)) {
        cache.set(user, Date.now());
    }
    return cache.get(user)
}

let lena = {name: 'Lena'};
let roma = {name: 'Roma'};

cacheUser(lena);
cacheUser(roma);

// console.log(cache.has(lena));
// console.log(cache.get(lena))


//===========================================   WeakSet   =========================================//

const usersWeak = [
    {name: 'Andrii'},
    {name: 'Taras'},
    {name: 'Petro'}
]

const visi = new WeakSet();

visi.add(usersWeak[0]).add(usersWeak[1]);

usersWeak.splice(1, 1);

console.log(visi.has(usersWeak[0]));
console.log(visi.has(usersWeak[1]));
console.log(visi.has(usersWeak[2]));