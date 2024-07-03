const express = require('express')();

express.get('/', (req, res) => {
    res.send('<h1>Hello!</h1><a href="./about">To about</a>')
})
express.get('/about', (req, res) => {
    res.send('<h1>About!</h1><a href="./">To hello</a>')
})

express.listen(3000, () => {
    console.log('Сервер запущен на порту 3000');
})