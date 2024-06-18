//1
const Person = {
    name: "John",
    age: 25,
    gender: "male",
    introduce() {
        console.log(`My name is ${this.name}. I am ${this.age} years old and I identify as ${this.gender}.`);
    },
    changeName(newName) {
        this.name = newName;
    }
};
Person.introduce();
Person.changeName("Petr");
Person.introduce();
//2
const Animal = {
    name: "Animal",
    eat() {
        console.log(`${this.name} is eating.`);
    }
};
const Dog = {
    name: "Rex",
    bark() {
        console.log(`${this.name} is barking.`);
    }
};
Dog.eat = Animal.eat;
Dog.eat();
//3
const Calculator = {
    add(num1, num2) {
        return num1 + num2
    },
    subtract(num1, num2) {
        return num1 - num2
    },
    multiply(num1, num2) {
        return num1 * num2
    }
};
console.log(Calculator.add.call(null, 5, 6));
console.log(Calculator.multiply.apply(null, [5, 6]));
//4
class Persona {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    };

    introduce() {
        console.log(`My name is ${this.name}. I am ${this.age} years old.`);
    }
}
const vasya = new Persona("Vasya", 30);
vasya.introduce();
//5
class BankAccount {
    static bankName = "Sber"
    constructor(number, balance) {
        this.balance = balance;
        this.number = number;
    };

    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited ${amount} into account ${this.number}. New balance = ${this.balance}`);
    }
    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log(`Withdrawn ${amount} from account ${this.number}. New balance = ${this.balance}`);
        }
        else {
            console.log("Нет денег!");
        }
    }
}
const account = new BankAccount("12345", 1500);
account.deposit(200);
account.withdraw(500);