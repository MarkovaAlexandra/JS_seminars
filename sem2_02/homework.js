/*
Задание 1: ""Управление библиотекой книг""

Реализуйте класс Book, представляющий книгу, со следующими свойствами и методами:

Свойство title (название) - строка, название книги.
Свойство author (автор) - строка, имя автора книги.
Свойство pages (количество страниц) - число, количество страниц в книге.
Метод displayInfo() - выводит информацию о книге (название, автор и количество страниц).
*/
class Book {
    constructor(title, author, pages) {
        this.title = title,
            this.author = author,
            this.pages = pages;

    }
    displayInfo() {
        console.log(`title: ${this.title}, author: ${this.author}, pages: ${this.pages}`);
    }
}
const book1 = new Book('War & Peace', 'Tolstoy', 600);
console.log(book1);
book1.displayInfo();
const book2 = new Book('Doctor Zivago', 'Pasternak', 500);
book2.displayInfo();
/*

Задание 2: ""Управление списком студентов""
Реализуйте класс Student, представляющий студента, со следующими свойствами и методами:

Свойство name (имя) - строка, имя студента.
Свойство age (возраст) - число, возраст студента.
Свойство grade (класс) - строка, класс, в котором учится студент.
Метод displayInfo() - выводит информацию о студенте (имя, возраст и класс).
javascript
// Пример использования класса
// Вывод:
// Name: John Smith
// Age: 16
// Grade: 10th grade
*/
class Student {
    constructor(name, age, grade) {
        this.name = name,
            this.age = age,
            this.grade = grade;
    }
    displayInfo() {
        console.log(`Name: ${this.name} \nAge: ${this.age}\nGrade: ${this.grade}`);
    }

}

const student1 = new Student("John Smith", 16, "10th grade");
student1.displayInfo();

const student2 = new Student("Jane Doe", 17, "11th grade");
student2.displayInfo();


// Создать класс "Телефонная книга" с методами для добавления, удаления и поиска контактов по имени или номеру телефона.

// Пример использования
// let phonebook = new Phonebook();
// phonebook.addContact("Иванов", "123-45-67");
// phonebook.addContact("Петров", "987-65-43");
// console.log(phonebook.findContactByName("Иванов")); // { name: "Иванов", phone: "123-45-67" }
// console.log(phonebook.findContactByPhone("987-65-43")); // { name: "Петров", phone: "987-65-43" }
// phonebook.deleteContact("Иванов");
// console.log(phonebook.contacts); // [{ name: "Петров", phone: "987-65-43" }]*/
class Phonebook {
    arr = []; //это же мы не переменную объявляем, а поле, поэтому без const

    constructor() {
    }
    addContact(name, number) {
        const item = {
            name: name,
            number: number,
        }
        this.arr.push(item);
    }
    deleteContact(name) {

        for (let i = 0; i < this.arr.length; i++) {
            if (this.arr[i].name === name) {
                console.log(this.arr[i]);
                this.arr.splice(i, 1);
                console.log(this.arr);
            }
        }
    }
    findContactByName(name) {
        for (let i = 0; i < this.arr.length; i++) {
            if (this.arr[i].name === name) {
                console.log(this.arr[i]);
            }
        }
    }
    findContactByNumber(number) {
        for (let i = 0; i < this.arr.length; i++) {
            if (this.arr[i].number === number) {
                console.log(this.arr[i]);
            }
        }
    }
    showAllContacts() {
        console.log(this.arr);
    }
}
let myphonebook = new Phonebook();
myphonebook.addContact('sasha', '111');
myphonebook.addContact('masha', '222');
myphonebook.addContact('natasha', '333');
myphonebook.addContact('dasha', '444');
myphonebook.showAllContacts();
myphonebook.findContactByName('dasha');
myphonebook.findContactByNumber('222');
myphonebook.deleteContact('masha');
const mynewphoneBook = new Phonebook();
mynewphoneBook.addContact('Pete', '798789798');
mynewphoneBook.showAllContacts();


