//1
const array = [1, 2, 3]
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
    if (typeof arr[0] === 'string') newArray.push(arr[0])
    if (typeof arr[arr.length - 1] === 'string') newArray.push(arr.length - 1)
    return newArray
}
console.log(showFirstAndLast(array));

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

    for (let char of strLower) {
        if (char in letter)
            letter[char]++
    }
    return letter
}
console.log(vowelCount("Hello World"));

//5
function capitalize(str) {
    return str.toUpperCase();
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
    let result = "";

    for (let char of str) {
        if (char in letterPLus) {
            result += letterPLus[char]
        } else if (char in letterPLusUp) {
            result += letterPLusUp[char]
        }
    }

    return result;
}

console.log(shiftLetters("Hello"));


//7

function swapCase(str) {
    const words = str.split(' ');
    const result = [];

    for (let i = 0; i < words.length; i++) {
        if (words[i].length % 2 === 0) {
            result.push(capitalize(words[i]))
        } else {
            result.push(words[i])
        }
    }
    return result.join(' ')
}

console.log(swapCase("hello my name is erez"));


