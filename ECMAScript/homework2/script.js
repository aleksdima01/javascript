// Реализуйте класс Book, представляющий книгу, со следующими свойствами и методами:

// Свойство title (название) - строка, название книги.
// Свойство author (автор) - строка, имя автора книги.
// Свойство pages (количество страниц) - число, количество страниц в книге.
// Метод displayInfo() - выводит информацию о книге (название, автор и количество страниц).

class Book {
    title = "Война и Мир";
    author = "Толстой Л.Н.";
    pages = 865;
    displayInfo() {
        console.log(`Произведение ${this.title} автора ${this.author} имеет ${this.pages} страниц.`);
    }
}
const book = new Book;
book.displayInfo();

// Реализуйте класс Student, представляющий студента, со следующими свойствами и методами:

// Свойство name (имя) - строка, имя студента.
// Свойство age (возраст) - число, возраст студента.
// Свойство grade (класс) - строка, класс, в котором учится студент.
// Метод displayInfo() - выводит информацию о студенте (имя, возраст и класс).

class Student {
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
    displayInfo() {
        console.log(`Name: ${this.name}
Age: ${this.age}
Grade: ${this.grade}`);
    }
}
const student1 = new Student("Vasya", 16, "10th grade");
student1.displayInfo();
const student2 = new Student("Petya", 17, "11th grade");
student2.displayInfo();