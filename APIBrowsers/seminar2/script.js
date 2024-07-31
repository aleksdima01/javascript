//Вам необходимо создать навигационное меню для веб-сайта, в
// котором меняется активный пункт при клике без фактического
// перехода на другие страницы. Меню должно обладать следующими
// характеристиками:
// 1. Подсветка активного пункта: При клике на пункт меню он
// должен становиться активным, и для активного пункта должен
// применяться определенный стиль (например, изменение цвета
// фона). Если выбрать другой пункт, предыдущий должен
// перестать быть активным.
// 2. Эффекты наведения: При наведении курсора на пункты меню
// должны применяться эффекты (например, изменение цвета
// текста или фона) для подсказки пользователю, что пункт меню
// является интерактивным.

//Вариант без делегирования событий
// const link = document.querySelectorAll('.menu__link');
// link.forEach(element => {
//     element.addEventListener('click', () => {
//         link.forEach(element => {
//             element.classList.remove('active');
//         });
//         element.classList.add('active');
//     })
// });

//Вариант через делегирование
const menuEl = document.querySelector('.menu');
menuEl.addEventListener('click', ({ target }) => {
    if (!target.closest('.menu__link')) {
        return;
    }
    menuEl.querySelector('.menu__link.active')?.classList.remove('active');
    target.classList.add('active');
})

