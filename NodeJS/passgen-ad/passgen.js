const passgen = require("passgen-ad");

const password = passgen.genRandom();
const password1 = passgen.genRandomWithoutSpecialCharacter(23);
const password2 = passgen.genLetters();
const password3 = passgen.genLowerLetters();
const password4 = passgen.genNumeric();
const password5 = passgen.genUpperLetters(16);


console.log(password);
console.log(password1);
console.log(password2);
console.log(password3);
console.log(password4);
console.log(password5);