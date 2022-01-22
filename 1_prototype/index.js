const person = new Object({
    name: 'Roma',
    age: 20,
    seyHello: function () {
        console.log('Ra-ta-tam');
    }
});


Object.prototype.myFunc = function () {
    console.log('Good night');
};

const olga = Object.create(person);
olga.name = 'Olga';