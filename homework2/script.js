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

let test = true;
test === true ? console.log('+++') : console.log('---');

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

let startNumber = prompt("Введите число:");
let edinic = startNumber % 10;
let desyat = parseInt((startNumber / 10) % 10);
let sotny = parseInt((startNumber / 100) % 10);
console.log(`В числе ${startNumber} количество сотен: ${sotny}, десятков: ${desyat}, единиц: ${edinic}`);

