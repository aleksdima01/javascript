// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

for (let i = 0; i <= 10; i++) {
    if (i === 0) {
        console.log(`${i} - это ноль`);
        i++;
    }
    if (i % 2 == 0) {
        console.log(`${i} - четное число`);
    }
    else {
        console.log(`${i} - нечетное число`);
    }
}

// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

const array = [1, 2, 3, 4, 5, 6, 7];
array.splice(3, 2);
console.log(array);

// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3
// const randomArray = [];

for (let i = 0; i < 5; i++) {
    randomArray.push(Math.round(Math.random() * (9)));
}
let sum = 0;
let min = 0;
for (let index = 0; index < randomArray.length; index++) {
    sum = sum + randomArray[index];
    min = Math.min(...randomArray);
}

console.log(randomArray);
console.log(`Сумма элементов массива: ${sum}`);
console.log(`Минимальный элемент массива: ${min}`);
if (randomArray.indexOf(3) !== -1) {
    console.log("В массиве есть 3");
}
else {
    console.log("В массиве нет 3");
}

// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:
// x
// xx
// xxx
// xxxx
// xxxxx

let a = "x";
for (let i = 0; i < 20; i++) {
    console.log(a);
    a = a + "x";
}