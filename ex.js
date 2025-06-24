//section 1
/*
let a = "some string"
let b = "other string"

let aLength = a.length
let bLength = b.length
a += b
b += a

a = a.slice(aLength)
b = b.slice(aLength).slice(1, bLength)
console.log(a);
console.log(b);


//section 2

const grid = [
    ['X', 'x', 'O', 'X', 'O'],
    ['O', 'X', 'X', 'O', 'x'],
    ['x', 'O', 'X', 'O', 'X'],
    ['X', 'O', 'x', 'X', 'O'],
    ['O', 'X', 'O', 'O', 'X']
];
let count = 0;
for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
        if (grid[i][j] === "X") {
            count++;
            console.log(`${i},${j}`);

        }
    }
}
console.log(count);



//section 3

let family = {
    parents: {},
    children: [
        { name: "Ali" },
        { name: "Lea" },
        { name: "Mona" }
    ]
};

console.log(family.children[2].name);
let str = "";
for (let i = 0; i < family.children.length; i++) {
    str += family.children[i].name;
    str += ", "
}
console.log(str);


//section 4

const original = [1, 2, 3, 4, 5];
const reversed = [];

for (let i = original.length - 1; i >= 0; i--) {
    reversed.push(original[i])
}

console.log(reversed);


//section 5

const mixedArray = [1, "hello", true, false, "world", 42];

const countsOfType = {
    number: 0,
    string: 0,
    boolean: 0,
};


for (const item of mixedArray) {

    const type = typeof item;
    if (countsOfType.hasOwnProperty(type)) {
        countsOfType[type]++;

    }
}

console.log(countsOfType)


//section 6

const numbers = [50, 200, 150, 90, 300]
const numbersBigger100 = []

numbers.forEach(element => {
    if (element > 100) numbersBigger100.push(element)
})

console.log(numbersBigger100);

//section 7

const result = {
    even: [],
    odd: []
};
let divideBy2And3 = 0

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        result.even.push(i)
    }
    else {
        result.odd.push(i)
    }
    if (i % 2 === 0 && i % 3 === 0) {
        divideBy2And3++
    }
}

console.log(result);
console.log(divideBy2And3);

//section 8

const Grid = []
const length = 3

for (let i = 0; i < length; i++) {
    Grid[i] = []
    for (let j = 0; j < length; j++) {
        if (i === j || (i + j) == (length - 1)) {
            Grid[i][j] = "#"
        } else {
            Grid[i][j] = " "
        }
    }
}

for (let i = 0; i < 3; i++) {
    console.log(Grid[i].join(" "));
}


//section 9

const str = "Hello, World! This is an example."
const freq = {}
const cleanedStr = str.toLowerCase().replace(/[^a-z]/g, '');

for (const char of cleanedStr) {
    if (freq[char]) {
        freq[char]++;
    } else {
        freq[char] = 1;
    }
}



console.log(freq)


//section 10 

const matrix = [
    [1, -2, 3],
    [-4, 5, 6],
    [7, 8, -9]
];
const result = [];

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        const num = matrix[i][j]
        if (num >= 0) {
            result.push(num)
        }
    }
}


console.log(result);


//section 11
const obj = {
    name: "Alice",
    age: 30,
    city: "Paris"
};


const keys = Object.keys(obj).map(key => key.toUpperCase()).sort()

const newObj = {}

for (const key of keys) {
    const originalKey = Object.keys(obj).find(k => k.toUpperCase() === key)
    newObj[key] = obj[originalKey]
}





console.log(newObj);

//section 12

for (let i = 0; i < 4; i++) {
    let str = ""
    for (let j = 0; j < i; j++) {
        str += "*"
    }
    console.log(str);


}

//section 13

const A = [1, 2, 2, 3, 4];
const B = [2, 2, 3, 5];
const setAB = new Set([...A, ...B]);
console.log(setAB.size);



//section 14

const obj = {
    a: "apple",
    b: 42,
    c: true,
    d: "banana"
};

const newObj = {}
const keys = Object.keys(obj)

for (const key of keys) {
    const val = obj[key]
    console.log(key);

    if (typeof val === `string` || typeof val === `number`)
        newObj[obj[key]] = key
}

console.log(newObj);

//section 15
const grid = []
const length = 5

for (let i = 0; i < length; i++) {
    const arr = []
    for (let j = 0; j < length; j++) {
        if (i === 2) {
            arr.push(9)
        }
        else if (i === j) {
            arr.push(1)
        } else {
            arr.push(0)
        }
    }
    grid.push(arr)
}

console.log(grid);

//section 16
const users = [
    { name: "Alice", active: true, age: 20 },
    { name: "Bob", active: false, age: 17 },
    { name: "Charlie", active: true, age: 16 },
    { name: "David", active: false, age: 15 },
    { name: "Eve", active: true, age: 22 }
];
let count = 0
users.forEach(element => {
    if (element.active && element.age > 18) {
        console.log(element);
    } else {
        count++
    }
})
console.log(count);


//section 17

const numbers = [4, 10, -3, 7, 22, 0];

let min = numbers[0]
let max = numbers[0]

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
        min = numbers[i]
    }
    if (numbers[i] > max) {
        max = numbers[i]
    }
}
console.log(`min: ${min}`);

console.log(`max: ${max}`);


//section 18

for (let i = 0; i < 3; i++) {
    const first = numbers.shift();
    numbers.push(first);
}

console.log(numbers);
*/
//section 19


const obj = { name: "Ali", age: 25 };

let strObj = ""

const keys = Object.keys(obj)
strObj += "{"
for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const val = obj[key];

    strObj += `"${key}": `;

    if (typeof val === "string") {
        strObj += `"${val}"`;
    } else {
        strObj += `${val}`;
    }

    if (i < keys.length - 1) {
        strObj += ", ";
    }
}
strObj += "}"
console.log(strObj);


//section 20



const grid = [
    ["O", "", "", ""],
    ["O", "", "", ""],
    ["O", "", "", ""],
    ["", "", "", ""]
]



for (let i = 0; i < grid.length; i++) {
    let countORow = 0
    let countOCol = 0

    for (let j = 0; j < grid[i].length; j++) {
        if (grid[i][j] === "O") {
            countORow++
        }
        if (grid[j][i] === "O") {
            countOCol++
        }
        if (countOCol > 2 || countORow > 2) {
            console.log("error");
            break
        }
    }
}
