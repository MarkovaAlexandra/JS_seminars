'use strict'

/*Создайте функцию mergeArrays, которая принимает два
массива и возвращает новый массив, содержащий все
элементы из обоих массивов. Используйте spread
оператор для объединения массивов.
mergeArrays([1, 2, 3], [4, 5, 6]); // Ожидаемый результат: [1, 2, 3, 4, 5, 6]
*/
function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}
const arr = mergeArrays([1, 2, 3], [4, 5, 6]);
console.log('task1');
console.log(arr);
/*2. Создайте функцию removeDuplicates, которая принимает
любое количество аргументов и возвращает новый
массив, содержащий только уникальные значения.
Используйте rest оператор для сбора всех аргументов в
массив а затем filter для определения дубликатов.
removeDuplicates(1, 2, 3, 2, 4, 1, 5); // Ожидаемый
результат: [1, 2, 3, 4, 5]
*/
function removeDuplicates(...values) {
    const myArr = [...values];
    return Array.from(new Set(myArr));
}
console.log('task2');
console.log(removeDuplicates(1, 2, 3, 2, 4, 1, 5));

/*
Задание 2 (Чистые функции 25минут)
Текст задания
1. Напишите функцию getEvenNumbers, которая принимает массив
чисел в качестве аргумента и возвращает новый массив,
содержащий только четные числа.
*/

function getEvenNumbers(arr) {
    return arr.filter(item => item % 2 == 0);
}
const allNumbers = [1, 2, 3, 4, 5, 6, 7]
const evenArr = getEvenNumbers(allNumbers);
console.log('task3');
console.log(evenArr);
/*
2. Задача: Напишите функцию calculateAverage, которая принимает
массив чисел в качестве аргумента и возвращает среднее значение
этих чисел.
*/
function calculateAverage(arr) {
    const sum = arr.reduce((sum, item) => (sum + item), 0);
    return sum / arr.length;
}
const srArifm = calculateAverage(allNumbers);
console.log('task4');
console.log(srArifm);
/*
3. Напишите функцию capitalizeFirstLetter, которая принимает строку в
качестве аргумента и возвращает новую строку, в которой первая
буква каждого слова является заглавной.
*/

function capitalizeFirstLetter(string) {
    const words = string.split(' ');
    //------------------------------------------ Через цикл--------------------------------------------
    // for (let i = 0; i < words.length; i++) {
    //     words[i] = words[i].replace(words[i][0], words[i][0].toUpperCase());
    // }
    // return words.join(' ');       
    //---------------------------------------------MAP-------------------------------------------------      
    let newWords = words.map(item => item.replace(item[0], item[0].toUpperCase()));
    return newWords.join(' ');

    /*  -----------------------------------------регулярные выражения--------------------------------------------------
    const capitalizeFirstLetter2 = (string) =>
        string.replace(/(^|\s)\S/g, (a) => a.toUpperCase());
      console.log(capitalizeFirstLetter2(text));
      */

}

const myStr = 'gjh hklj ouy hhjjkj jnjkhkl';
const myUpperStr = capitalizeFirstLetter(myStr);
console.log('task5');
console.log(myUpperStr);



/*
Задание 3 (Замыкания 20 минут)
1. Напишите функцию createCalculator, которая принимает начальное
значение и возвращает объект с двумя методами: add и subtract.
Метод add должен увеличивать значение на переданное число, а
метод subtract должен уменьшать значение на переданное число.
Значение должно быть доступно только через методы объекта, а не
напрямую.
*/

const createCalculator = (num) => {
    return {
        add: (someOtherNum) => num + someOtherNum,
        subtract: (someOtherNum) => num - someOtherNum,
    }
}

const calculator1 = createCalculator(40);
console.log('task 6');
console.log(calculator1.add(15));
console.log(calculator1.subtract(20));
console.log(calculator1.add(200));
const calculator2 = createCalculator(100);
console.log(calculator2.add(100));
/*
Задание 4 (Лексический контекст 15 минут)
1. Напишите функцию createGreeting, которая принимает имя
пользователя и возвращает функцию, которая будет выводить
приветствие с использованием этого имени.
// Пример использования:
const greeting = createGreeting('John');
greeting(); // Ожидаемый результат: "Hello, John!"
Задание 5 (тайминг 15 минут)
*/

const createGreeting = (name) => {
    const greeting = (name) => `Hello, ${name}`;  // создаем внутри функцию, которой передаем name
    return greeting(name);                        // вызываем эту функцию с переданным name
}

console.log('task 7');
console.log(createGreeting('Sasha'));
/*
1. Задача: Напишите функцию createPasswordChecker, которая
принимает допустимую длину пароля в качестве аргумента и
возвращает функцию для проверки введенного пароля.
Возвращаемая функция должна принимать пароль и возвращать
true, если его длина соответствует допустимой, и false в противном
случае.
// Пример использования:
const isPasswordValid = createPasswordChecker(8);
console.log(isPasswordValid('password')); // Ожидаемый результат:
false
console.log(isPasswordValid('secret')); // Ожидаемый результат: true
*/


// тут по действиям
const createPasswordChecker = (length) => {
    return function (password) {
        return password.length < length;
    }
};
// тут в одну строку 
const createPasswordChecker2 = (length) => (password) => password.length < length;


console.log('task 8');
const isPasswordValid = createPasswordChecker(8);
console.log(isPasswordValid('password'));

const isPasswordValid2 = createPasswordChecker2(8);
console.log(isPasswordValid2('password'));
/*
Задание 6 (Рекурсия 25 минут)
1. Напишите рекурсивную функцию sumDigits, которая принимает
положительное целое число в качестве аргумента и возвращает
сумму его цифр.
// Пример использования:
console.log(sumDigits(123)); // Ожидаемый результат: 6 (1 + 2 + 3)
console.log(sumDigits(456789)); // Ожидаемый результат: 39 (4 + 5 + 6
+ 7 + 8 + 9)
*/
const sumDigits = (num) => {
    if (num < 10) {
        return num;
    }
    return num % 10 + sumDigits(Math.floor(num / 10));
}
console.log('task 9');
console.log(sumDigits(123));
console.log(sumDigits(456789));


