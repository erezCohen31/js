//ex 1
function extractNumbers(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("not array !");
    }
    return arr.filter(element => typeof element === "number" && !isNaN(element))
}

//ex 2
function sumNumbersSafe(arr) {
    const newArr = extractNumbers(arr)
    return newArr.reduce((a, b) => a + b, 0)


}

//ex 3

function filterLargeSums(arrList, minTotal) {
    return arrList.filter(element => {
        try {
            return sumNumbersSafe(element) >= minTotal;
        } catch (err) {
            return false; // ignorer les éléments invalides
        }
    })
}

//ex 4

function summaryStats(arrList) {
    const validArr = filterLargeSums(arrList, 10)
    const sum = validArr.reduce((a, b) => a + sumNumbersSafe(b), 0)
    const avg = validArr.length > 0 ? sum / validArr.length : 0;
    return { sum, avg }

}
//ex 5

function safeCalculator(a, b, operation) {

    if (typeof a !== "number" || typeof b !== "number") {
        throw new Error("Both operands must be numbers");
    }

    switch (operation) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            if (b === 0) {
                throw new Error("Cannot divide by zero");
            }
            return a / b;
        default:
            throw new Error("it s not operator");
    }
}
