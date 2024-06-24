//1
const objPetya = {
    name: "Petya",
    number: 123,
    getName() {
        console.log(`My name is ${this.name}!`);
    }
};
const objVasya = {
    name: "Vasya",
    number: 456
};
Object.setPrototypeOf(objVasya, objPetya);

function getPrototypeChain(object) {
    const massChain = [];
    let currentObj = object;
    while (currentObj !== null) {
        massChain.push(currentObj);
        currentObj = Object.getPrototypeOf(currentObj)
    }
    return massChain;
}

const prototypeChain = getPrototypeChain(objVasya);
console.log(prototypeChain);

//2
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`Животное ${this.name} издаёт звук!`);
    }
};
class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
    fetch() {
        console.log(`Собака ${this.name} принесла мяч!`);
    }
}
const dog = new Dog("Шарик", "Лабрадор");
console.log(dog.fetch());
console.log(dog.speak());
console.log(dog.breed);

//3
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
class ShoppingCart {
    arrayProducts = [];
    constructor(customerName, initialTotalCost) {
        this.customerName = customerName;
        this.totalCost = initialTotalCost;
    }
    addItem(product, quantity = 1) {
        this.arrayProducts.push({ product, quantity });
        this.totalCost += product.price * quantity;
        console.log(this.arrayProducts);
    };
    checkout() {
        console.log(`Заказ оформлен для ${this.customerName}. Общая стоимость заказа: ${this.totalCost} рублей. Спасибо за покупку!`);
    };
    getCurrentTotalCost() {
        return this.totalCost;
    }
}
const shoppingCart = new ShoppingCart("Федор Васильевич", 0);
shoppingCart.addItem(new Product("Кабачок", 320), 3);
shoppingCart.addItem(new Product("Огурец", 150), 5);
shoppingCart.addItem(new Product("Помидор", 250));
console.log(`Общая стоимость заказа: ${shoppingCart.getCurrentTotalCost()}`);
shoppingCart.checkout();

