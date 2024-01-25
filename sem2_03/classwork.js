/*
Напишите функцию getPrototypeChain(obj), которая будет
возвращать цепочку прототипов для заданного объекта
obj. Функция должна вернуть массив прототипов, начиная
от самого объекта и заканчивая глобальным объектом
Object.prototype.
*/
function getPrototypeChain(obj) {
    const arr = [];
    arr.push(obj);
    while (Object.getPrototypeOf(obj) != null) {
        arr.push(Object.getPrototypeOf(obj));
        obj = Object.getPrototypeOf(obj);
    }
    return arr;
}
const product = {
    name: 'apple',
    price: 200,
}
console.log(product);
console.log(Object.getPrototypeOf(product));
console.log(getPrototypeChain(product));

/*
Задание 2 (20минут)
Напишите конструктор объекта Person, который принимает два аргумента:
name (строка) и age (число). Конструктор должен создавать объект с
указанными свойствами name и age и методом introduce(), который
выводит в консоль строку вида "Меня зовут [name] и мне [age] лет.".
// Пример:
const person1 = new Person("John", 25);
person1.introduce(); // Вывод: Меня зовут John и мне 25 лет.
*/
class Person {
    constructor(name, age) {
        this.name = name,
            this.age = age
    }
    introduce() {
        console.log(`My name is ${this.name}, i'm ${this.age} years.`)
    }
}
const person1 = new Person('John', 25);
person1.introduce();
/*
Задание 3 (call, apply 20 минут)
Напишите конструктор объекта BankAccount, который будет
представлять банковский счет. Конструктор должен принимать два
аргумента: accountNumber (строка) и balance (число). Конструктор
должен создавать объект с указанными свойствами accountNumber и
balance и следующими методами:
1. deposit(amount): принимает аргумент amount (число) и увеличивает
баланс на указанную сумму.
2. withdraw(amount): принимает аргумент amount (число) и уменьшает
баланс на указанную сумму, если на счету есть достаточно средств.
Если средств недостаточно, выводится сообщение "Недостаточно
средств на счете.".
3. getBalance(): возвращает текущий баланс счета.
Задание 3 (Пример )
const account1 = new BankAccount("1234567890", 1000);
console.log(account1.getBalance()); // Вывод: 1000
account1.deposit(500);
console.log(account1.getBalance()); // Вывод: 1500
account1.withdraw(200);
console.log(account1.getBalance()); // Вывод: 1300
account1.withdraw(2000); // Вывод: "Недостаточно средств на счете."

*/

/*
Задание 4 (Class 30 минут)
Создайте класс Animal, который будет представлять животное. У
класса Animal должны быть следующие свойства и методы:
● Свойство name (строка) - имя животного.
● Метод speak() - выводит в консоль звук, издаваемый животным.
Создайте подкласс Dog, который наследует класс Animal. Для
подкласса Dog добавьте дополнительное свойство и метод:
● Свойство breed (строка) - порода собаки.
● Метод fetch() - выводит в консоль сообщение "Собака [name]
принесла мяч.".
*/
class Animal {
    constructor(name) {
        this.name = name
    }
    speak() {
        console.log(`${this.name} speaks`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name),
            this.breed = breed
    }
    fetch() {
        console.log(`Dog ${this.name} has bring the ball`);
    }
}

const animal = new Animal('barsik');
const dog = new Dog('mailo', 'corgi');
animal.speak();
dog.speak();
dog.fetch();

/*
Создать класс калькулятор с приватными полями "последний результат" и "текущее значение".
Класс должен иметь публичные методы "+", "-", "*", "/", которые будут изменять
значение текущего значения в сооотв с выбранной операцией.
Также класс должен иметь статическое поле "точность", которе будет задавать 
кол-во знаков после запятой при выводе результата
*/

class Calculator {
    // приватное поле #
    #result; // это приватное поле
    constructor(result) {
        this.#result = result;
    }
    getResult() {
        return this.#result;
    }
}
const calc = new Calculator(0);
console.log(calc);
console.log(calc.getResult());

class Calculator2 {
    #currentValue = 0;
    #lastResult = 0;
    static #precision = 2;

    add(value) {
        this.#lastResult = this.#currentValue;
        this.#currentValue += value;
    };
    sub(value) {
        this.#lastResult = this.#currentValue;
        this.#currentValue -= value;
    }
    mult(value) {
        this.#lastResult = this.#currentValue;
        this.#currentValue *= value;
    }
    div(value) {
        if (value === 0) {
            throw new Error('division by zero')
        }
        this.#lastResult = this.#currentValue;
        this.#currentValue /= value;
    }

    getResult() {
        return Number(this.#currentValue.toFixed(Calculator2.#precision));
    }
    getResultBezZnakov() {
        return this.#currentValue;
    }
    getLastResult() {
        return Number(this.#lastResult.toFixed(Calculator2.#precision));
    }
    getLastResultBezZnakov() {
        return this.#lastResult;
    }
}
const calc2 = new Calculator2;
calc2.add(15);
console.log(calc2.getResult());
console.log(calc2.getResultBezZnakov());
calc2.sub(12);
console.log(calc2.getResult());
console.log(calc2.getResultBezZnakov());
console.log(calc2);
calc2.div(7);
console.log(calc2.getResult());
console.log(calc2.getResultBezZnakov());
//calc2.div(0);