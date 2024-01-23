'use strict'

/*
Создайте объект Person, представляющий человека, с следующими свойствами: name, age и gender. 
Добавьте также методы introduce и changeName. 
Метод introduce должен выводить информацию о человеке, включая его имя, возраст и пол. 
Метод changeName должен изменять имя человека на новое заданное значение.
Person.name = "John";
Person.age = 25;
Person.gender = "male";
Person.introduce(); // Ожидаемый результат: My name is
John. I'm 25 years old and I identify as male.
Person.changeName("Mike");
*/

// const Person1 = {
//     name: this.name,
//     age: this.age,
//     gender: this.gender,
//     introduce: function () {
//         console.log(`My name is ${this.name}. I'm ${this.age} years old and I identify as ${this.gender}`)
//     },
//     changeName: function (name) {
//         this.name = name;
//     },
// }


// Person1.name = "John";
// Person1.age = 25;
// Person1.gender = "male";
// console.log(Person1);
// Person1.introduce();
// Person1.changeName("Mike");
// Person1.introduce();


/*
Задание 2 (20минут)
1. Создайте объект Animal со свойством name и методом eat(), который
выводит сообщение о том, что животное ест. Создайте объект Dog со
свойством name и методом bark(), который выводит сообщение о
том, что собака лает. Используйте одалживание метода eat() из
объекта Animal для объекта Dog, чтобы вывести сообщение о том,
что собака ест.
// Одалживание метода eat() из объекта Animal к объекту Dog
Dog.eat = Animal.eat;
Dog.eat(); // Вывод: Rex is eating.
*/
const Animal = {
    name: 'Zver',
    eat: function () {
        console.log(`${this.name} ест`);
    }

}

const Dog = {
    name: "Bobik",
    bark: function () {
        console.log(`${this.name} bow bow`);
    }
}

Dog.eat = Animal.eat;
Dog.eat();
Animal.bark = Dog.bark;
Animal.bark();


// const Animal = {
//     name: 'Animal',
//     eat() {
//         console.log(`${this.name} is eating`);
//     },
// }
// const Dog = {
//     name: 'Bobik',
//     bark() {
//         console.log('bow-wow');
//     },
// }

// Dog.eat = Animal.eat;
// Animal.eat();
// Dog.eat();

// setTimeout(() => Dog.eat(), 5000);
/*
Задание 3 (call, apply 20 минут)
1. Создайте объект calculator с методами add(), subtract() и multiply(),
которые выполняют соответствующие математические операции над
двумя числами. Используйте методы call и apply для вызова этих
методов с передачей аргументов.
console.log(calculator.add.call(null, 5, 3)); // Вывод: 8
console.log(calculator.subtract.apply(null, [5, 3])); // Вывод: 2
*/
// const Calculator = {

//     add: function (a,b) {

//         a + b;
//     },
//     subtract: function (a, b) {
//         return a - b;
//     },

//     multiply: function (a, b) {
//         return a * b;
//     },

// }
// const Number = {
//     a: 10,
//     b: 5,
// }
// console.log(Calculator.add.call(null, 5, 3));
// console.log(Calculator.subtract.apply(null, [5, 3]));
// console.log(Calculator.add.call(Number, Number.num1, Number.num2));
// console.log(Calculator.add.call(Number));
// const result = Calculator.add.call(Number);
// console.log(result);
// console.log
// // /*
// Задание 4 (Объекты через class 25 минут)
// 1. Создайте класс Person, который имеет свойства name и age, а также
// метод introduce(), который выводит сообщение с представлением
// имени и возраста персоны.
// const person = new Person("John", 25);
// person.introduce(); // Вывод: My name is John and I'm 25 years old.
// */
// class Person {

//     constructor(name, age) {
//         this.name = name,
//             this.age = age;
//     }
//     introduce() {
//         console.log(`My name is ${this.name}. I'm ${this.age} years old`);
//     }
// }
// const person = new Person("John", 25);
// person.introduce();
// const person2 = new Person('Vasya', 35);
// person2.introduce();
// // Person.bark = Dog.bark;
// // person.bark();
// console.log(person);

/*
Задание 5 (Class 30 минут)
Создайте класс BankAccount, который представляет банковский счет.
У него должны быть свойства accountNumber (номер счета) и balance
(баланс), а также методы deposit(amount) для пополнения счета и
withdraw(amount) для снятия денег со счета. Класс должен иметь
также статическое свойство bankName, которое содержит название
банка.
const account1 = new BankAccount("1234567890", 1000);
account1.deposit(500); // Вывод: Deposited 500 into account
1234567890. New balance: 1500
account1.withdraw(200); // Вывод: Withdrawn 200 from account
1234567890. New balance: 1300
account1.withdraw(1500); // Вывод: Insufficient funds in account
1234567890
*/
class BankAccount {
    static bankName = 'Sber';
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;

    }
    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited ${amount} into account ${this.accountNumber}. New balance: ${this.balance}`);
    }
    withdraw(amount) {
        if (amount > this.balance) {
            console.log(`Insufficient funds in account ${this.accountNumber}`);

        }
        else {
            this.balance -= amount;
            console.log(`Withdrawn ${amount} from account ${this.accountNumber}. New balance: ${this.balance}`);
        }
    }

}

const account_1 = new BankAccount('123456', 1000);
const account_2 = new BankAccount('789789', 100);
console.log(account_1.bankName);
account_1.deposit(2000);
account_2.withdraw(50);
account_2.withdraw(500);



// class BankAccount {
//     constructor(accountNumber, balance) {
//         this.accountNumber = accountNumber;
//         this.balance = balance;
//     }
//     deposit(amount) {

//         this.balance += amount;
//         console.log(`Deposited ${amount} into account ${this.accountNumber}. New balance: ${this.balance}`)
//     }
//     withdraw(amount) {

//         if (amount > this.balance) {
//             console.log(`Insufficient funds in account ${this.accountNumber}`);
//             return;
//         }
//         else {
//             this.balance -= amount;
//             console.log(`Withdrawn ${amount} from account ${this.accountNumber}. New balance: ${this.balance}`)
//         }
//     }
// }
// const account1 = new BankAccount('123456', 1000);
// account1.deposit(1000);
// account1.withdraw(555);
// const account2 = new BankAccount('8888888', 1500);
// account2.withdraw(1200);
// account2.withdraw(200);
// account2.withdraw(1000);
// /*
// Задание 6 (Рекурсия 25 минут)
// 1. Напишите рекурсивную функцию sumDigits, которая принимает
// положительное целое число в качестве аргумента и возвращает
// сумму его цифр.
// // Пример использования:
// console.log(sumDigits(123)); // Ожидаемый результат: 6 (1 + 2 + 3)
// console.log(sumDigits(456789)); // Ожидаемый результат: 39 (4 + 5 + 6
// + 7 + 8 + 9)
// */
// const sumDigits = (num) => {
//     if (num < 10) {
//         return num;
//     }
//     return num % 10 + sumDigits(Math.floor(num / 10));

// }
// console.log(sumDigits(123));
// console.log(sumDigits(456789));