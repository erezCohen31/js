const data = [
    {
        name: "John",
        birthday: "1-1-1995",
        favoriteFoods: {
            meats: ["hamburgers", "sausages"],
            fish: ["salmon", "pike"],
        },
    },
    {
        name: "Mark",
        birthday: "10-5-1980",
        favoriteFoods: {
            meats: ["hamburgers", "steak", "lamb"],
            fish: ["tuna", "salmon", "barracuda"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["cow", "chicken"],
            fish: ["pike"],
        },
    },
    {
        name: "Thomas",
        birthday: "1-10-1990",
        favoriteFoods: {
            meats: ["bird", "rooster"],
            fish: ["salmon"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["hamburgers", "lamb"],
            fish: ["bass", "tuna"],
        },
    },
];

function printName() {
    return data.map(element => element.name)
}
console.log(printName());


function getAfterNine() {
    return data.filter(element => {
        const year = parseInt(element.birthday.split("-")[2]);
        return year < 1991;
    })
}

console.log(getAfterNine())

function countAllFoods(data) {
    const foodCount = {}

    data.forEach(element => {
        const allFoods = [...element.favoriteFoods.meats, ...element.favoriteFoods.fish]

        allFoods.forEach(food => {
            foodCount[food] = (foodCount[food] || 0) + 1;
        })
    })

    return foodCount
}

console.log(countAllFoods(data))

