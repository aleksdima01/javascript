//1
function spreadArr(arr1, arr2) {
    const result = [...arr1, ...arr2];
    return (result);
}
console.log(spreadArr([1, 2, 3], [4, 5, 6]));
//2
function removeDuplicates(...args) {
    return args.filter((elem, index) =>
        args.indexOf(elem) === index);
}
console.log(removeDuplicates(1, 2, 3, 4, 4, 5, 5, 6, 6, 6, 7, -5, -7));
//3
function getEvenNumber(args) {
    return args.filter(el => el % 2 === 0);
    ;
}
console.log(getEvenNumber([1, 2, 3, 4]));
//4
function calculateAverage(args) {
    const sum = args.reduce((acc, number) => acc + number);
    return sum / args.length;
}
console.log(calculateAverage([1, 2, 3, 4]));
//5
function capitaliseFirstLetter(str) {

    const words = str.split(" ");
    let res = null;
    let resString = '';
    words.forEach(word => {
        res = word.charAt(0).toUpperCase() + word.slice(1);
        resString += " " + res;

    });
    return resString;

}

console.log(capitaliseFirstLetter("петя васечкин хороший парень"));
//6
function createCalculator(initialValue) {
    let value = initialValue;
    return {
        add(num) {                             //Одинаковая запись с примером ниже
            value += num;
        },
        subtract: function (num) {
            value -= num;
        },
        getValue: function () {
            return value;
        }
    }
}
const calc = createCalculator(10);
calc.add(5);
calc.subtract(7);
console.log(calc.getValue());
//7
function createGreeting(firstName) {
    return function () {
        console.log(`Hello ${firstName}!`);
    }
}
const greeting = createGreeting("Petr")
greeting();
//8
function createPasswordChecker(len) {
    return function (str) {
        return str.length === len;            //аналогичная запись
        // if (str.length === len) {    
        //     return true
        // } else {
        //     return false;
        // }
    }
}
const isPasswordValid = createPasswordChecker(8);
console.log(isPasswordValid("akdfjsms"));
console.log(isPasswordValid("akdfjsm"));
//9
let result = 0
function sumDigits(number) {

    if (number < 10) {
        return number;
    }
    else {
        return number % 10 + sumDigits(Math.floor(number / 10));
    }
}

console.log(sumDigits(123)); 