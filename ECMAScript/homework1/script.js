//Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки
const arr = [1, 5, 7, 9];
console.log(Math.min(...arr));

//Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.
function createCounter() {
    let value = 0;
    return {
        increment() {
            return ++value;
        },
        decrement: function () {
            return --value;
        }

    }
}
const calc = createCounter();
console.log(calc.increment());
console.log(calc.increment());
console.log(calc.increment());
console.log(calc.decrement());

//Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.
// Пример
// const rootElement = document.getElementById('root');
// const targetElement = findElementByClass(rootElement, 'my-class');
// console.log(targetElement);

function findElementByClass(element, className) {
    if (element.children == null) {
        console.log("нет элементов");
    }
    return element.getElementsByClassName(className);

}
const rootElement = document.getElementById('body');
console.log(rootElement);
const box = document.querySelector(".box")
const targetElement = findElementByClass(rootElement, "box");
console.log(targetElement);
// console.log(rootElement.children);
