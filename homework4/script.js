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

const array = [1, 2, 3, 4, 5, 6, 7];
array.splice(3, 2);
console.log(array);

const randomArray = [];
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
let a = "x";
for (let i = 0; i < 20; i++) {
    console.log(a);
    a = a + "x";
}