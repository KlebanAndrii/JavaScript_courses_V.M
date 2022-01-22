function hello() {
    console.log('hello!!!!!', this);
}

const user = {
    name: 'Andrii',
    age: 38,
    sayHello: hello,
    sayHelloWindow: hello.bind(this),
    logInfo: function (job, phone) {
        console.group(`${this.name} Info:`)
        console.log(`Name id ${this.name}`);
        console.log(`Age is ${this.age}`);
        console.log(`Job is ${job}`);
        console.log(`Phone is ${phone}`)
        console.groupEnd();
    }
};

const lena = {
    name: 'Elena',
    age: 30
};

user.logInfo('Frontend', '45-3234-23-13');
user.logInfo.bind(lena, 'Developer', '43-43-43-23-21-12')();
user.logInfo.call(lena, 'Developer', '43-43-43-23-21-12');
user.logInfo.apply(lena, ['Developer', '43-43-43-23-21-12']);

//============================================================//

const array = [1, 2, 3, 4, 5];

Array.prototype.mulBy = function (n) {
    return this.map(function (i) {
        return i * n;
    })
};

console.log(array.mulBy(8));
