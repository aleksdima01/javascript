//1
function delayedMessage(message, delay) {

    setTimeout(() => { console.log(message) }, delay);
}
delayedMessage("Привет", 3000);
delayedMessage("Как дела?", 3800);
delayedMessage("Пока", 5000);
delayedMessage("Конец программы", 5300);

//2
const tasks = [
    {
        name: "task 1", time: 1000
    },
    {
        name: "task 2", time: 2000
    },
    {
        name: "task 3", time: 3000
    },
    {
        name: "task 4", time: 4000
    },
    {
        name: "task 5", time: 5000
    }
]
function delayedTasks(tasks) {
    let delay = tasks[0].time;
    tasks.forEach((el) => {
        setTimeout(() => {
            console.log(el.name)
        }, delay);
        delay += el.time;
    })
}
delayedTasks(tasks);

//3

function loadData(url) {
    const XMLHttp = new XMLHttpRequest();
    XMLHttp.onreadystatechange = function () {
        if (XMLHttp.status != 200 && XMLHttp.readyState != 4) { // если статус не 200, то произошла ошибка
            console.log(`Error ${XMLHttp.status}: ${XMLHttp.statusText}`);
        } else {
            console.log(`user: ${XMLHttp.responseText}`); // response - это ответ сервера
        }
    }
    XMLHttp.open('GET', url, true);
    XMLHttp.send();
}

//loadData("https://api.github.com/users/octopus");

//4

fetch("https://api.github.com/users/octopus")
    .then((result) => {
        if (result.ok) {
            return result.text();
        }
        throw new Error("Ошибка");
    })
    .then(data => {
        console.log(data);
    })
    .catch((err) => {
        console.error("Все очень плохо")
    });