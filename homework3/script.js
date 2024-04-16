function cube(arg) {
    return arg ** 3;
}

console.log(cube(2) + cube(3));


let salary = Number(prompt("Введите зарплату до вычета налогов:"));

function cleanSalary(inputSalary) {
    console.log(`Размер заработной платы за вычетом налогов равен ${inputSalary * 0.87}`);
}
if (isNaN(salary)) {
    console.log("Введено не число");
}
else {
    cleanSalary(salary);
}


const number1 = Number(prompt("Введите первое число"));
const number2 = Number(prompt("Введите второе число"));
const number3 = Number(prompt("Введите третье число"));

function isMax(num1, num2, num3) {
    let maxNum;
    if (num1 > num2) {
        maxNum = num1;
    } else {
        maxNum = num2;
    }
    if (num3 > maxNum) {
        maxNum = num3;
    }
    console.log(`Максимальное число: ${maxNum}`);
}
isMax(number1, number2, number3);

function sum(num1, num2) {
    return num1 + num2;
}

function product(num1, num2) {
    return num1 * num2;
}

function difference(num1, num2) {
    if (num1 > num2) {
        return num1 - num2;
    }
    else {
        return num2 - num1;
    }
}

function division(num1, num2) {
    return num1 / num2;
}

console.log(sum(2, 3));
console.log(product(2, 8));
console.log(difference(3, 20));
console.log(division(6, 1.5));
