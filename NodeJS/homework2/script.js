function genRandomWithoutSpecialCharacter(length = 8) {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function genRandom(length = 8) {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*?';
    let charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
function genLetters(length = 8) {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
function genUpperLetters(length = 8) {
    let result = genLetters(length).toUpperCase();
    return result;
}
function genLowerLetters(length = 8) {
    let result = genLetters(length).toLowerCase();
    return result;
}

function genNumeric(number = 8) {
    let result = '';
    function getRandomArbitrary(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    for (let index = 0; index < number; index++) {
        result += (getRandomArbitrary(1, 10));
    }
    return result;
}

module.exports = { genLetters, genLowerLetters, genNumeric, genRandom, genUpperLetters, genRandomWithoutSpecialCharacter }