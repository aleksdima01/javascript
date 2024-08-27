//1

/**  Представьте, что у вас есть класс для управления библиотекой. В этом классе будет приватное свойство для хранения списка книг, а также методы для добавления книги, удаления книги и получения информации о наличии книги.

Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.

Реализуйте геттер allBooks, который возвращает текущий список книг.

Реализуйте метод addBook(title), который позволяет добавлять книгу в список. Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.

Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.

Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.

Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку.
*/

class Library {
    #books = [];
    constructor(books) {
        const uniqueBooks = Array.from(new Set(books));
        if (books.length !== uniqueBooks.length)
            throw new Error("Список книг не уникален!");
        this.#books = books;
    }

    get getAllBooks() {
        console.log("_______________Библиотека__________________");
        this.#books.forEach(element => {
            console.log(element);
        });
        return this.#books;
    }
    addBook(title) {
        if (this.hasBook(title))
            throw new Error("Такая книга уже есть в библиотеке!");
        this.#books.push(title);
        return this.#books;
    }
    removeBook(title) {
        const index = this.#books.indexOf(title)
        if (this.hasBook(title)) {
            this.#books.splice(index, 1);
        }
        else throw new Error("В библиотеке нет такой книги!");
        return this.#books;
    }
    hasBook(title) {
        if (this.#books.includes(title))
            return true;
        return false;
    }
}

const library = new Library(["Винни-Пух", "Приключения Барона Мюнхаузена", "Шерлок Холмс"])
library.addBook("Маленький принц");
library.removeBook("Шерлок Холмс");
library.getAllBooks;

//2
/**
 * Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные сообщения, вы решаете установить некоторые ограничения.

Создайте HTML-структуру с текстовым полем для ввода отзыва, кнопкой для отправки и контейнером, где будут отображаться отзывы.

Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами. Однако если длина введенного отзыва менее 50 или более 500 символов, функция должна генерировать исключение.

При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.
 */

if (localStorage.getItem("review") !== null) {
    textcontainer.innerHTML = localStorage.getItem("review");
}

button.addEventListener("click", () => {
    if (input.value.length < 50 || input.value.length > 500)
        throw new Error("Недопустимый размер отзыва");
    textcontainer.insertAdjacentHTML("beforeend", `<p class="text">${input.value}</p>`);
    input.value = "";
    localStorage.setItem("review", textcontainer.innerHTML);
})