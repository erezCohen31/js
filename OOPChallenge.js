// problem 1
/*
class MediaItem {
    constructor(title, year, genre) {
        this.title = title
        this.year = year
        this.genre = genre
    }
    getSummary() { }
}

class Book extends MediaItem {
    constructor(author, pageCount, title, year, genre) {
        super(title, year, genre)
        this.author = author
        this.pageCount = pageCount
    }
    getSummary() {
        console.log(`Book: ${this.title} by ${this.author}, ${this.pageCount} pages`);

    }

}

class Movie extends MediaItem {
    constructor(director, durationMinutes, title, year, genre) {
        super(title, year, genre)
        this.director = director
        this.durationMinutes = durationMinutes
    }
    getSummary() {
        console.log(`Movie: ${this.title} by ${this.author}, ${this.durationMinutes} min`);

    }
}

class Library {
    constructor() {
        this.mediaItems = []
    }
    add(item) {
        this.mediaItems.push(item)
    }
    search(item) {
        return this.mediaItems.filter(mediaItem =>
            mediaItem.title.toLowerCase()item.toLowerCase()
        );
    }
    listByGenre(genre) {
        return this.mediaItems.filter(mediaitem =>
            mediaitem.genre.toLowerCase() === genre.toLowerCase()
        );
    }
}

const lib = new Library();
lib.add(new Book("Frank Herbert", 412, "Dune", 1965, "Sci - Fi"));
lib.add(new Movie("Denis Villeneuve", 155, "Dune", 2021, "Sci - Fi"));
console.log(lib.search("dune"));
console.log(lib.listByGenre("Sci - Fi"));


//problem 2

class BankAccount {
    constructor(owner, balance) {
        this.owner = owner
        this.balance = balance
    }
    deposit(amount) {
        this.balance += amount
        return true
    }
    withdraw(amount) {
        if (amount < this.balance) {
            this.balance -= amount
            return true
        } else {
            console.log("not amount permit");
            return false
        }
    }
}

class SavingsAccount extends BankAccount {
    constructor(owner, balance) {
        super(owner, balance)
    }
    applyInterest(rate) {
        this.balance *= rate
    }
}
class CheckingAccount extends BankAccount {
    constructor(owner, balance, overdraftLimit) {
        super(owner, balance)
        this.overdraftLimit = overdraftLimit
    }
    withdraw(amount) {
        if (this.balance + this.overdraftLimit > amount) {
            this.balance -= amount
            return true
        }
        else {
            console.log("not amount permit");
            return false
        }
    }
}
class Bank {
    constructor() {
        this.accounts = []
    }
    addAccount(account) {
        this.accounts.push(account)
    }
    searchAccountByName(name) {
        return this.accounts.find(account =>
            account.owner.toLowerCase() === (name.toLowerCase())

        )
    }
    transfer(fromName, toName, amount) {
        const from = this.searchAccountByName(fromName)
        const to = this.searchAccountByName(toName)
        if (from.withdraw(amount)) {
            to.deposit(amount)
        }

    }
    showBalances() {
        this.accounts.forEach(account =>
            console.log(`${account.owner}: ${account.balance}`)

        )
    }
}
const bank = new Bank();
bank.addAccount(new SavingsAccount("Alice", 5000));
bank.addAccount(new CheckingAccount("Bob", 1000, 500));
bank.transfer("Alice", "Bob", 1000);
bank.showBalances();
*/

//problem 3 

class Animal {
    constructor(name, species, lastFedTime) {
        this.name = name
        this.species = species
        this.lastFedTime = lastFedTime

    }
    feed() { }
}
class Carnivore extends Animal {
    constructor(name, species, lastFedTime) {
        super(name, species, lastFedTime)
    }
    feed() {
        console.log(`Feeding carnivore ${this.species} - meat served.`);
        this.lastFedTime = Date.now()
    }


}
class Herbivore extends Animal {
    constructor(name, species, lastFedTime) {
        super(name, species, lastFedTime)
    }
    feed() {
        console.log(`Feeding herbivore ${this.species} - veggies served.`);
        this.lastFedTime = new Date()

    }
}

class Zookeeper {
    constructor() {
        this.animals = []
    }
    addAnimal(animal) {
        this.animals.push(animal)
    }
    feedAll() {
        this.animals.forEach(animal =>
            animal.feed()
        )
    }
    searchAnimalByName(name) {
        return this.animals.find(animal =>
            animal.name.toLowerCase() === (name.toLowerCase())
        )
    }
    getLastFed(name) {
        const animal = this.searchAnimalByName(name)
        return animal.lastFedTime

    }
    getBySpecies(species) {
        return this.animals.filter(animal =>
            animal.species === species
        )
    }
}
const zoo = new Zookeeper();
zoo.addAnimal(new Carnivore("Simba", "Lion"));
zoo.addAnimal(new Herbivore("Longneck", "Giraffe"));
zoo.feedAll();
console.log(zoo.getLastFed("Simba"));