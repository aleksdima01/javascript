//. Определение текущего размера окна браузера: Напишите функцию, которая будет выводить текущую ширину и высоту окна браузера при его изменении.
const size = document.querySelector(".size");

function getSize() {
    let widtth = window.innerWidth;
    let height = window.innerHeight;
    size.innerHTML = `Размеры экрана: ${widtth}x${height}`;
}



window.addEventListener("resize", () => {
    getSize();
})

//Подтверждение закрытия страницы: Создайте всплывающее окно или диалоговое окно, которое появляется при попытке закрыть вкладку браузера и спрашивает пользователя,
// уверен ли он в своем решении закрыть страницу.

window.onbeforeunload = (e) => {
    e.returnValue = 'Есть несохранённые изменения! Уверены, что хотите покинуть страницу?';
    return e.returnValue;
}

//Управление историей переходов: Используйте объект history для управления историей переходов на веб-странице. Создайте кнопки "Назад" и "Вперед" для перемещения по истории.

const fwdBtn = document.querySelector(".btn_forward");
const bcwdBtn = document.querySelector(".btn_backward");

fwdBtn.addEventListener('click', () => {
    window.history.forward();
})
bcwdBtn.addEventListener('click', () => {
    window.history.back();
})