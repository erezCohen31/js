function start(num, fn, fn, fn) {
    return fn(num)
}

function multiply(num, fn, fn) {

    return fn(num * 2)
}

function subtract(num, fn) {

    return fn(num - 5)
}
function divide(num) {
    return num / 5

}

console.log(start(5, multiply, subtract, divide));

function test() {
    let x = 5
    if (true) {
        let x = 10
    }
    console.log(x);

}
test()
