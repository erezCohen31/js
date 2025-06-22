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


