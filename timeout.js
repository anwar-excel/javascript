function doSomething() {
    console.log(333);
}
console.log(222);
setTimeout(() => {
    console.log('See you later.')
}, 4000)
setInterval(function()  {
    console.log('Hello My Friends')
}, 3000);
console.log(4444);