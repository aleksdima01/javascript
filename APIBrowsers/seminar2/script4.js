/*
  Вам предоставляется задача создать простой онлайн опросник, который позволяет пользователям
отвечать на вопросы с вариантами ответов. Ваша задача - разработать интерфейс и функциональность
для этого опросника, используя HTML, CSS и JavaScript.
1. Создайте интерфейс с несколькими вопросами и вариантами ответов. Каждый вопрос должен
иметь несколько вариантов ответов.
2. Реализуйте обработку событий, чтобы пользователи могли выбирать варианты ответов.
3. Добавьте кнопку "Завершить опрос", которая будет показывать результаты опроса.
4. При нажатии на кнопку "Завершить опрос", вы должны проверить, что пользователь ответил на все
вопросы, и отобразить выбранные им варианты ответов.
5. Если пользователь не ответил на все вопросы, покажите ему сообщение о необходимости ответить
на все вопросы перед завершением опроса.
6. По желанию можно добавить стилизацию опросника с использованием CSS для лучшего
пользовательского опыта.
 */

const questionEls = document.querySelectorAll('.question');
const submitBtn = document.querySelector('#submit');
const resultEl = document.querySelector('.result');
const answers = document.querySelector('.answers');

submitBtn.addEventListener('click', () => {
    const resultHtml = [];
    questionEls.forEach((questionEl, index) => {
        const checkedInput = questionEl.querySelector('input:checked');
        // if (!checkedInput) {
        //     questionEl.classList.add('not-checked');                  Другой вариант более интересный ниже
        // }
        // if (checkedInput) {
        //     questionEl.classList.remove('not-checked');
        // }
        questionEl.classList.toggle('not-checked', !checkedInput);
        if (checkedInput) {
            resultHtml.push(`<p>Вопрос ${index + 1}: <span>${checkedInput.value}</span></p>`)
        }
    });
    if (resultHtml.length === questionEls.length) {
        answers.innerHTML = resultHtml.join('');
        resultEl.style.removeProperty("display");
        submitBtn.disabled = true;
    }
})

