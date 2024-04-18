// Создать переменные num1, num2 которые пользователь вводит с клавиатуры
// Проверьте, что переменная num1 равна или меньше 1, а переменная num2 больше или равна 3.

let num1 = Number(prompt("Введите первое число:"));
let num2 = Number(prompt("Введите второе число:"));

if (num1 <= 1) {
    console.log("Первое число равно или меньше 1");
} else {
    console.log("Первое число больше 1");
}

if (num2 >= 3) {
    console.log("Второе число больше или равно 3");
} else {
    console.log("Второе число меньше 3");
}

// Перепишите код к тернарному оператору

// let test = true;
// if (test === true) {
// console.log('+++');
// } else {
// console.log('---');
// }

let test = true;
test === true ? console.log('+++') : console.log('---');

//В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

let day = Number(prompt("Введите число от 1 до 31:"));
if (day >= 1 & day < 11) {
    console.log("Число в первой декаде месяца");
} else if (day >= 11 & day < 21) {
    console.log("Число во второй декаде месяца");
}
else if (day >= 21 & day <= 31) {
    console.log("Число в третьей декаде месяца");
}
else {
    console.log("Число вне диапазона");
}

// Необходимо от пользователя получить число.
// Необходимо вывести разряды числа, а именно: количество сотен, десятков и единиц.

let startNumber = prompt("Введите число:");
let edinic = startNumber % 10;
let desyat = parseInt((startNumber / 10) % 10);
let sotny = parseInt((startNumber / 100) % 10);
console.log(`В числе ${startNumber} количество сотен: ${sotny}, десятков: ${desyat}, единиц: ${edinic}`);

