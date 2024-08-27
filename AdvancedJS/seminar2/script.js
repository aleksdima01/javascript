// 1
/**
 * Давайте создадим класс для управления банковским счетом. В этом классе будет приватное свойство для хранения текущего баланса, а также методы для внесения и снятия денег со счета.
 * 1. Класс должен содержать приватное свойство #balance, которое инициализируется значением 0 и представляет собой текущий баланс счета. 
 * 2. Реализуйте геттер balance, который позволит получить информацию о текущем балансе. 
 * 3. Реализуйте метод deposit(amount), который позволит вносить средства на счет. Убедитесь, что сумма внесения не отрицательная; в противном случае выбрасывайте ошибку. 
 * 4. Реализуйте метод withdraw(amount), который позволит снимать средства со счета. Убедитесь, что сумма для снятия неотрицательная и что на счете достаточно средств; в противном случае выбрасывайте ошибку. 
 * 5. Реализуйте конструктор, который принимает начальный баланс в качестве аргумента. Убедитесь, что начальный баланс не отрицательный; в противном случае выбрасывайте ошибку.
 */
class BankAccount {
    // Приватное свойство для хранения баланса
    #balance = 0;
    // Геттер для получения текущего баланса
    get getBalance() {
        return this.#balance;
    }
    // Метод для внесения денег на счет
    deposit(amount) {

        if (amount > 0) {
            this.#balance += amount;
        }
        else {
            throw new Error("Отрицательное пополнение баланса")
        }
        return this.#balance;
    }
    // withdraw(amount) Метод для снятия денег со счета
    withdraw(amount) {
        if (this.#balance < 0) {
            throw new Error("Отрицательный баланс");
        }
        else if (this.#balance > amount && amount > 0) {
            this.#balance -= amount;
        }
        else {
            throw new Error("Недостаточно средств для снятия или отрицательное значение");
        }
        return this.#balance;
    }
    // constructor(initialBalance) Конструктор для инициализации начального баланса
    constructor(initialBalance) {
        if (initialBalance < 0) {
            throw new Error("Отрицательный баланс");
        }
        this.#balance = initialBalance;


    }
}

// Создаем новый банковский счет с начальным балансом 500
// let account = new BankAccount(500);
// console.log(account.getBalance); // Выводит: 500

// account.deposit(200);
// console.log(account.getBalance); // Выводит: 700

// account.withdraw(100);
// console.log(account.getBalance); // Выводит: 600

// 2
/**
 * У вас есть базовый список пользователей. Некоторые из них имеют информацию о своем премиум-аккаунте, а некоторые – нет.
Ваша задача – создать структуру классов для этих пользователей и функцию для получения информации о наличии премиум-аккаунта, используя Опциональную цепочку вызовов методов, оператор нулевого слияния и instanceof.
Создайте базовый класс User с базовой информацией (например, имя и фамилия).
Создайте классы PremiumUser и RegularUser, которые наследуются от User. Класс PremiumUser должен иметь свойство premiumAccount (допустим, дата истечения срока действия), а у RegularUser такого свойства нет.
Создайте функцию getAccountInfo(user), которая принимает объект класса User и возвращает информацию о наличии и сроке действия премиум-аккаунта, используя Опциональную цепочку вызовов методов и оператор нулевого слияния.
В функции getAccountInfo используйте instanceof для проверки типа переданного пользователя и дайте соответствующий ответ.
 */

class User {
    firstname = null;
    lastname = null;
    constructor(firstname, lasname) {
        this.firstname = firstname;
        this.lasname = lasname;
    }
}


class PremiumUser extends User {
    premiumAccountDate = null;

    setPremiumAccount() {
        this.premiumAccountDate = new Date().setFullYear(new Date().getFullYear() + 1); // Пример: установите срок действия на год вперед
    }

}

// создать RegularUser

class RegularUser extends User {

}

function getAccountInfo(user) {
    if (user instanceof PremiumUser) {
        console.log(`Премиум аккаунт действителен до ${new Date(user.premiumAccountDate)}` ?? "Информация отсутствует");
    }
    else if (user instanceof RegularUser) {
        console.log(`Пользователь без премиум аккаунта`);
    }
    else {
        console.log("Тип пользователя не определен");
    }
    // Премиум аккаунт действителен до такой-то даты или информация отсутствует

    // пользователь без премиум аккаунта
    // Тип пользователя не определен"
}

// Проверка
// const fedor = new PremiumUser("Федор", "Сальников");
// fedor.setPremiumAccount();
// const petr = new RegularUser("Петр", "Ефремов");

// getAccountInfo(fedor);
// getAccountInfo(petr);

// 3
/**
 * Вы создаете интерфейс, где пользователь вводит число.
Ваша задача — проверить, является ли введенное значение числом или нет, и дать соответствующий ответ.

Создайте HTML-структуру: текстовое поле для ввода числа и кнопку "Проверить".
Добавьте место (например, div) для вывода сообщения пользователю.
Напишите функцию, которая будет вызвана при нажатии на кнопку. Эта функция должна использовать try и catch для проверки вводимого значения.
 */
const inputNumber = document.querySelector(".input_number");
const button = document.querySelector(".button");
const text = document.querySelector(".text");

button.addEventListener('click', () => checkInput());

function checkInput() {
    try {
        const value = inputNumber.value;
        if (!isNaN(value)) {
            text.textContent = "Число";
        }
        else text.textContent = "Не число";

    } catch (error) {
        text.textContent = error.message;
    }
}