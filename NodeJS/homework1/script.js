// Напишите HTTP сервер и реализуйте два обработчика, где:
// — По URL “/” будет возвращаться страница, на которой есть гиперссылка на вторую страницу по ссылке “/about”
// — А по URL “/about” будет возвращаться страница, на которой есть гиперссылка на первую страницу “/”
// — Также реализуйте обработку несуществующих роутов(404).
// — * На каждой странице реализуйте счетчик просмотров.Значение счетчика должно увеличиваться на единицу каждый раз, когда загружается страница.

//http server

let count404 = 0;
let count = 0;
let countAbout = 0;

const http = require("http");

const server = http.createServer((req, res) => {

    if (req.url === "/") {
        count += 1;
        res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
        res.end(`<h1>Корневая страница</h1><a href="/about">Ссылка на about</a><p>Просмотров: ${count}</p>`);
    } else if (req.url === "/about") {
        countAbout += 1;
        res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
        res.end(`<h1>Страница about</h1><a href="/">Ссылка на /</a><p>Просмотров: ${countAbout}</p>`);
    }
    else {
        count404 += 1;
        res.writeHead(404, { 'Content-Type': 'text/html; charset=UTF-8' });
        res.end(`<h1>Ошибка 404</h1><a href="/">Ссылка на /</a><p>Просмотров: ${count404}</p>`);
    }
})

server.listen("3000", () => {
    console.log("server started on port 3000");
});
