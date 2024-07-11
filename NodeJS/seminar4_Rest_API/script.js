const express = require('express');

const app = express();

const joi = require('joi');

const userSchema = joi.object({
    firstname: joi.string().min(1).required(),
    secondname: joi.string().min(1).required(),
    age: joi.number().min(0).max(120).required(),
    city: joi.string().min(1)
})

const users = [];

let userID = 0;

app.use(express.json());

app.get('/users', (req, res) => {
    res.send({ users });
})

app.get('/users/:id', (req, res) => {
    const id = +req.params.id; // + это приведение к числу(Number)
    const user = users.find(user => user.id === id)
    if (user) {
        res.send({ user });
    }
    else {
        res.status(404);
        res.send({ user: null });
    }
})

app.post('/users', (req, res) => {
    userID += 1;
    users.push({
        id: userID,
        ...req.body
    })
    res.send({ id: userID });
})

app.put('/users/:id', (req, res) => {
    const result = userSchema.validate(req.body);
    if (result.error) {
        return res.status(400).send({ error: result.error.details });
    }
    const id = +req.params.id; // + это приведение к числу(Number)
    const user = users.find(user => user.id === id)
    if (user) {
        const { firstname, secondname, age, city } = req.body;
        user.firstname = firstname;
        user.secondname = secondname;
        user.age = age;
        user.city = city;
        res.send({ user });
    }
    else {
        res.status(404);
        res.send({ user: null });
    }
})

app.delete('/users/:id', (req, res) => {
    const id = +req.params.id; // + это приведение к числу(Number)
    const user = users.find(user => user.id === id)
    if (user) {
        const userIndex = users.indexOf(user);
        users.splice(userIndex, 1);
        res.send({ users });
    }
    else {
        res.status(404);
        res.send({ user: null });
    }
})


app.listen(3000, () => {
    console.log("Сервер запущен на порту 3000!");
})