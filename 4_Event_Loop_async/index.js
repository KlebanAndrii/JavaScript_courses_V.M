console.log('Start');

setTimeout(function () {
    console.log('setTime 2 sec.')
}, 2000);


let click = document.getElementById('click');
click.onclick = function () {
    console.log('Button click')
}

setTimeout(function () {
    console.log('setTime 0 sec.')
}, 0)

console.log('End');