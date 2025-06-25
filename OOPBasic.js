//ex 1
/*
function Phone(brand, model) {
    this.brand = brand
    this.model = model

    this.details = () => console.log(`Phone: ${this.brand} ${this.model}`);

}

const phone = new Phone("samsung", "s22")
phone.details()


//ex 2

function Rectangle(width, height) {
    this.width = width
    this.height = height

    this.area = () => this.width * this.height
}

const rectangle = new Rectangle(5, 4)
console.log(rectangle.area());

class BankAccount {
    constructor(owner, balance) {
        this.owner = owner
        this.balance = balance
    }

    deposit(amount) {
        this.balance += amount
    }
    withdraw(amount) {
        this.balance -= amount
    }
    checkBalance() {
        console.log(`your current balance: ${this.balance}`);

    }
}

const bank = new BankAccount("erez", 1000)
bank.deposit(500)
bank.withdraw(200)
bank.checkBalance()


//ex 4
function Animal(name) {
    this.name = name
    this.speak = () => console.log(`${this.name} make a sound`);

}
function Dog(name) {
    Animal.call(this, name)
    this.bark = () => console.log(`${this.name} barks`);

}

const animal = new Animal()
const dog = new Dog("dogy")

Object.setPrototypeOf(dog, animal)
console.log(dog.name);
dog.speak()
dog.bark()


//ex 5
function Vehicle(type) {

    this.type = type

    this.describe = () => {
        console.log(`this is a ${this.type}`);

    }
}

function Car(brand) {

    Vehicle.call(this, "car")
    this.brand = brand

    this.info = () => {
        console.log(`this is a ${this.brand} ${this.type}`);

    }
}
const vehicle = new Vehicle()
const car = new Car("jeep")
Object.setPrototypeOf(car, vehicle)
car.describe()
car.info()

//ex 6

function Shape() {
    this.area = () => 0
}
function Circle(radius) {
    this.radius = radius
    this.area = () => Math.PI * this.radius * this.radius
}
function Square(side) {
    this.side = side
    this.area = () => this.side * this.side
}
const shape = new Shape()
const circle = new Circle(3)
const square = new Square(16)

Object.setPrototypeOf(circle, shape)
Object.setPrototypeOf(square, shape)

console.log(circle.area());
console.log(square.area());


//ex 7 

class Book {
    constructor(title, author) {
        this.title = title
        this.author = author

    }
    info() {
        console.log(`${this.title} by ${this.author}`);

    }
}
const book = new Book("the hobbit", "tolkien")
book.info()
 */

//ex 8

class Person {
    constructor(name) {
        this.name = name
    }
    greet() {
        console.log(`Helo, im ${this.name}`);

    }
}
class Student extends Person {
    constructor(name, school) {
        super(name)
        this.school = school
    }
    study() {
        console.log(`${this.name} is studying at ${this.school}`);

    }
}

const student = new Student("erez", "kodkod")
student.study()

//ex 9 
class Employee {
    #salary
    constructor(salary) {
        this.#salary = salary

    }
    getSalary() {
        return this.#salary
    }
    work() {
        console.log("employee is working");

    }
}
class Manager extends Employee {
    constructor(salary) {
        super(salary)
    }
    work() {
        console.log("manager is working");

    }
}
const employee = new Employee(4000)
console.log(employee.getSalary());
employee.work()
const manager = new Manager(5000)
console.log(manager.getSalary());
manager.work()


