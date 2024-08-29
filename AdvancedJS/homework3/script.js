/**
 * Создайте интерактивную веб-страницу для оставления и просмотра отзывов о продуктах. Пользователи могут добавлять отзывы о различных продуктах и просматривать добавленные отзывы.

Страница добавления отзыва:

Поле для ввода названия продукта.
Текстовое поле для самого отзыва.
Кнопка "Добавить отзыв", которая сохраняет отзыв о продукте в LocalStorage.

Страница просмотра отзывов:

Показывает список всех продуктов, о которых были оставлены отзывы.
При клике на название продукта отображается список всех отзывов по этому продукту.
Возможность удаления отзыва (при нажатии на кнопку "Удалить" рядом с отзывом, данный отзыв удаляется из LocalStorage).
 */

// if (localStorage.getItem("review") !== null) {
//     textcontainer.innerHTML = localStorage.getItem("review");
// }
const reviewsDiv = document.querySelector(".review");
const message = document.createElement("p");
const p = document.createElement("p");
p.innerHTML = `<p style='color: red;'>Название продукта не может быть пустым!</p`;
const textcontainer = document.createElement("div")

button.addEventListener("click", () => {
    const productName = document.querySelector(".product_name__input");
    //reviewsDiv.removeChild(message);
    if (reviewsDiv.contains(message)) {
        reviewsDiv.contains(message);
    }
    if (productName.parentNode.contains(p)) {
        productName.parentNode.removeChild(p);
    }
    if (productName.value == "") {
        productName.parentNode.prepend(p);
    }
    else if (input.value.length == 0) {
        message.innerHTML = `<p style='color: red;'>Отзыв не может быть пустым!</p`;
        reviewsDiv.append(message);
    }
    else {
        if (input.value.length > 5000)
            throw new Error("Отзыв слишком длинный");

        if (localStorage.getItem(`${productName.value}`) != null) {
            textcontainer.innerHTML = `${localStorage.getItem(`${productName.value}`)}`
        }
        else {
            textcontainer.innerHTML = ''
        }
        textcontainer.insertAdjacentHTML("beforeend", `<li class="down_li">${input.value}</li><button class="delete_button" type="button">Удалить</button>`);
        input.value = "";
        localStorage.setItem(`${productName.value}`, textcontainer.innerHTML);
        productName.value = "";
        message.innerHTML = `<p style='color: red;'>Отзыв успешно размещен!</p`;
        reviewsDiv.append(message);
        setTimeout(() => {
            reviewsDiv.removeChild(message);
        }, 2000);
    }
})
const buttonToReviews = document.querySelector(".to_reviews");
buttonToReviews.addEventListener('click', () => {
    window.location.href = './reviews.html';
})
