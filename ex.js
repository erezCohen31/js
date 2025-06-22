//section 1

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

console.log(countsOfType);



