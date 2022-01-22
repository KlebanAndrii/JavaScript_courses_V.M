// // // ===========  localStorage - only string   ============== // // //

const myNumber = 42;

// localStorage.removeItem('number');
// console.log(localStorage.getItem('number'));
// localStorage.setItem('number', myNumber.toString());
// console.log(localStorage.getItem('number'));
// localStorage.clear();

const object = {
    name: 'Andrii',
    age: 38
};

localStorage.setItem('person', JSON.stringify(object))
const raw = localStorage.getItem('person');
let rawPar = JSON.parse(raw);
rawPar.name = 'Roma';
// console.log(rawPar);

//===================================================//

window.addEventListener('storage', event => {
    console.log(event)
});