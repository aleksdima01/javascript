/**
 * Используя Symbol.iterator, создайте объект "Библиотека", который можно итерировать. Каждая итерация должна возвращать следующую книгу из библиотеки. 1. Создайте объект library, который содержит массив книг и имеет свойствосимвол Symbol.iterator. 2. Реализуйте кастомный итератор для объекта library. Итератор должен перебирать книги по порядку. 3. Используйте цикл for...of для перебора книг в библиотеке и вывода их на консоль. Массив книг: 
 */

books = [
    { title: "1984", author: "George Orwell" }, { title: "Brave New World", author: "Aldous Huxley" }, { title: "Fahrenheit 451", author: "Ray Bradbury" }];
books[Symbol.iterator] = function () {
    return {
        current: 0,
        to: this.length,
        next() {
            return this.current < this.to
                ? { done: false, value: books[this.current++] }
                : { done: true };
        }
    }
}
for (const book of books) {
    console.log(`Название: ${book.title}, Автор: ${book.author}`);
}

/**  Часто при работе с DOM мы сталкиваемся с коллекциями элементов, которые не являются стандартными массивами, но похожи на них. Однако у таких коллекций нет методов массива, и здесь на помощь приходит Array.from. В этом задании вы научитесь конвертировать коллекции DOM-элементов в массивы и работать с ними. 
 * Дан код html:
 * <div>Element 1</div>
    <div data-active="true">Element 2</div>
    <div>Element 3</div>
    <div data-active="true">Element 4</div>
 * Напишите функцию, которая собирает все элементы <div> на странице, преобразует их в массив и фильтрует только те из них, у которых есть атрибут data-active. Выведите результат на консоль.*/
function getDataActiveDivs() {
    const divs = Array.from(document.querySelectorAll("div"));
    const result = divs.filter(div => div.hasAttribute("data-active"));
    //const result = divs.filter(div => div.dataset.active); второй вариант
    console.log(result);
}
getDataActiveDivs();

/**
 * Представьте себе ситуацию: у нас есть группа студентов, и мы хотим отследить, кто из них посетил какие уроки и кто из преподавателей вёл данные уроки. 1. Map будет использоваться для хранения соответствия между уроком и преподавателем. 2. Set будет использоваться для хранения уникальных уроков, которые посетил каждый студент.
 */

// 1. Map: урок => преподаватель
const lessons = new Map();
lessons.set("Математика", "Смирнов");
lessons.set("История", "Иванова");
// ("Математика", "Смирнов"), ("История", "Иванова") 
// 2. Map: студент => Set уроков 
const students = new Map();
students.set("Иван", new Set().add("Математика").add("История"));
console.log(students.get("Иван"));
// Проверка: 
console.log(`Преподаватель по Математике: ${lessons.get("Математика")}`); // Смирнов 
console.log(`Уроки Ивана: ${[...students.get("Иван")]}`); // Математика, история