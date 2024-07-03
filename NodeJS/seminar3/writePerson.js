const path = require('path');
const fs = require('fs');

const obj = {
    "name": "Ivan",
    "surname": "Ivanov",
    "age": 30,
    "city": "Moscow"
}

fs.writeFileSync(path.join(__dirname, 'person.json'), JSON.stringify(obj, null, 4), 'utf-8');
