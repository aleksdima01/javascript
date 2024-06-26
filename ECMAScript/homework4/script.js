// ""Получение данных о пользователе""

// Реализуйте функцию getUserData, которая принимает идентификатор пользователя (ID) в качестве аргумента и использует fetch для получения данных о пользователе с заданным ID с удаленного сервера. Функция должна возвращать промис, который разрешается с данными о пользователе в виде объекта. Если пользователь с указанным ID не найден, промис должен быть отклонен с соответствующим сообщением об ошибке.

// Подсказка, с последовательностью действий:
// getUserData использует fetch для получения данных о пользователе с удаленного сервера. Если запрос успешен (с кодом 200), функция извлекает данные из ответа с помощью response.json() и возвращает объект с данными о пользователе. Если запрос неуспешен, функция отклоняет промис с сообщением об ошибке.

async function getUserData(id) {

    const response = await fetch("https://jsonplaceholder.typicode.com/users");


    const users = await response.json();
    if (response.status === 200) {
        const usersID = [];
        users.forEach(user => {
            usersID.push(user.id)
        });
        if (id in usersID && id !== 0) {
            console.log(users[id - 1]);
        } else {
            console.log("Нет пользователя с таким ID!");
        }
    }
    else {
        console.error("Ошибка");
    }
}
getUserData(1);

// ""Отправка данных на сервер""

// Реализуйте функцию saveUserData, которая принимает объект с данными о пользователе в качестве аргумента и использует fetch для отправки этих данных на удаленный сервер для сохранения. Функция должна возвращать промис, который разрешается, если данные успешно отправлены, или отклоняется в случае ошибки.

// *Подсказка *
// // Пример использования функции
// const user = {
// name: 'John Smith',
// age: 30,
// email: 'john@example.com'
// };

// saveUserData(user)
// .then(() => {
// console.log('User data saved successfully');
// })
// .catch(error => {
// console.log(error.message);
// });

// saveUserData использует fetch для отправки данных о пользователе на удаленный сервер для сохранения. Она отправляет POST-запрос на URL-адрес /users с указанием типа содержимого application/json и сериализует объект с данными о пользователе в JSON-строку с помощью JSON.stringify(). Если запрос успешен (с кодом 200), функция разрешает промис. Если запрос неуспешен, функция отклоняет промис с сообщением об ошибке.

const user = {
    name: 'John Smith',
    age: 30,
    email: 'john@example.com'
};

function saveUserData(data) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
        })
        .then(() => {
            console.log('User data saved successfully');
        })
        .catch(error => {
            console.error(error.message);
        });
}
saveUserData(user);

//3
// ""Изменение стиля элемента через заданное время""

// Напишите функцию changeStyleDelayed, которая принимает идентификатор элемента и время задержки (в миллисекундах) в качестве аргументов. Функция должна изменить стиль элемента через указанное время.

// // Пример использования функции
// changeStyleDelayed('myElement', 2000); // Через 2 секунды изменяет стиль элемента с id 'myElement'"

const changeStyleDelayed = (el, time) => {
    setTimeout(() => {
        el.style.backgroundColor = "blue"
    }, time);
}
const element = document.querySelector("#element");

changeStyleDelayed(element, 3000);