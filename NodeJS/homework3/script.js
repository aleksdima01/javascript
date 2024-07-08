//http server на express

// Напишите HTTP сервер на express и реализуйте два обработчика “/” и “/about”, где:

// — На каждой странице реализован счетчик просмотров
// — Значение счетчика необходимо сохранять в файл каждый раз, когда обновляется страница
// — Также значение счетчика должно загружаться из файла, когда запускается обработчик страницы
// — Таким образом счетчик не должен обнуляться каждый раз, когда перезапускается сервер.

const path = require('path');
const fs = require('fs');

const objectCounter = JSON.parse(fs.readFileSync(path.join(__dirname, 'counter.json'), 'utf-8'));

const express = require("express");
const server = express();

server.get('/', (req, res) => {
    objectCounter.index += 1;
    res.send(`<h1>Hello!</h1><a href="./about">To about</a><p>Просмотров: ${objectCounter.index}</p>`);
    fs.writeFileSync(path.join(__dirname, 'counter.json'), JSON.stringify(objectCounter, null, 4), 'utf-8');
})
server.get('/about', (req, res) => {
    objectCounter.about += 1;
    res.send(`<h1>About!</h1><a href="./">To hello</a><p>Просмотров: ${objectCounter.about}</p>`);
    fs.writeFileSync(path.join(__dirname, 'counter.json'), JSON.stringify(objectCounter, null, 4), 'utf-8');
})

server.listen("3000", () => {
    console.log("server started on port 3000");
});
