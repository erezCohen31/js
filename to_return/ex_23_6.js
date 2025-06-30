//1
const array = [1, 2, 3]
const array1 = ["hello", 2, "world"]

function doubleValues(arr) {
    return arr.map(element => element * 2)



}

console.log("1   " + doubleValues(array));

//2

function onlyEvenValues(arr) {
    return arr.filter(element => element % 2 === 0)
}
console.log("2   " + onlyEvenValues(array));

//3
function showFirstAndLast(arr) {
    const newArray = []
    /* if (typeof arr[0] === 'string') newArray.push(arr[0])
     if (typeof arr[arr.length - 1] === 'string') newArray.push(arr.length - 1)
     return newArray*/
    return arr.filter((element, index) =>
        (index === 0 || index === arr.length - 1) && typeof element === 'string'
    );
}
console.log("3   " + showFirstAndLast(array1));

//4

function vowelCount(str) {
    const letter = {
        a: 0,
        e: 0,
        i: 0,
        o: 0,
        u: 0
    }
    const strLower = str.toLowerCase()
    const arrStr = strLower.split('')

    arrStr.forEach(element => {
        if (element in letter) {
            letter[element]++
        }
    });


    return letter
}
console.log(vowelCount("Hello World"));

//5
function capitalize(str) {
    const arrStr = str.split('');
    const upArrStr = arrStr.map(element => element.toUpperCase());
    const newStr = upArrStr.join('');
    return newStr;
}
console.log(capitalize("hello"));

//6

const letterPLus = {
    a: 'b',
    b: 'c',
    c: 'd',
    d: 'e',
    e: 'f',
    f: 'g',
    g: 'h',
    h: 'i',
    i: 'j',
    j: 'k',
    k: 'l',
    l: 'm',
    m: 'n',
    n: 'o',
    o: 'p',
    p: 'q',
    q: 'r',
    r: 's',
    s: 't',
    t: 'u',
    u: 'v',
    v: 'w',
    w: 'x',
    x: 'y',
    y: 'z',
    z: 'a'
}
const letterPLusUp = {
    A: 'B',
    B: 'C',
    C: 'D',
    D: 'E',
    E: 'F',
    F: 'G',
    G: 'H',
    H: 'I',
    I: 'J',
    J: 'K',
    K: 'L',
    L: 'M',
    M: 'N',
    N: 'O',
    O: 'P',
    P: 'Q',
    Q: 'R',
    R: 'S',
    S: 'T',
    T: 'U',
    U: 'V',
    V: 'W',
    W: 'X',
    X: 'Y',
    Y: 'Z',
    Z: 'A'
}



function shiftLetters(str) {

    const arrStr = str.split('')

    const newArr = arrStr.map(element => {
        if (element in letterPLus) return letterPLus[element];
        if (element in letterPLusUp) return letterPLusUp[element];
        return element;
    });



    return newArr.join('');
}

console.log(shiftLetters("Hello"));


//7

function swapCase(str) {
    return str
        .split(' ')
        .map(element => (element.length % 2 === 0 ? capitalize(element) : element))
        .join(' ');
}


console.log(swapCase("hello my name is erez"));


