const path = require('path');
const fs = require('fs');

const person = JSON.parse(fs.readFileSync(path.join(__dirname, 'person.json'), 'utf-8'));
person.city = "Ekaterinburg"
person.age -= 10;

fs.writeFileSync(path.join(__dirname, 'person.json'), JSON.stringify(person, null, 4), 'utf-8');