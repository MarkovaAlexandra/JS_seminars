/*
1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки
*/
const arr = [1, 5, 7, 9];
console.log(Math.min(...arr));
/*
2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.
*/
function createCounter() {
    let counter = 0;
    return {
        //тут есть вопрос- eсли написать counter++ (counter--) то значение выводится предыдущее, при первом вызове  = 0
        increment: () => ++counter,
        decrement: () => --counter,
    }

}

const count1 = createCounter();
console.log(count1.increment());
console.log(count1.increment());
console.log(count1.decrement());
console.log(count1.increment());




/*
3)Напишем функцию, которая будет находить факториал числа с использованием рекурсии:
// примеры вызова функции
console.log(factorial(5)); // выводит 120 (5 * 4 * 3 * 2 * 1)
console.log(factorial(0)); // выводит 1 (по определению факториала)
*/
const factorial = (number) => {
    if (number === 1 || number === 0) {
        return 1;
    }
    return number * factorial(number - 1);
}
console.log(factorial(5)); // выводит 120 (5 * 4 * 3 * 2 * 1)
console.log(factorial(0)); // выводит 1 (по определению факториала)
console.log(factorial(10));



