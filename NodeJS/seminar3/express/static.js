//5

const express = require('express');

const app = express();
app.use(express.static('static'));


app.listen(3000, () => {
    console.log('Сервер запущен на порту 3000');
})