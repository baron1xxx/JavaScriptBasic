/**
 * Повертаэ index останнього елемента що шукається або -1, якщо не знайдено. ПОШУК У ЗВОРОТНЬОМУ ПОРЯДКУ (З КІНЦЯ)!!!
 * @param searchElement - елемент масиву який шукається.
 * @param fromIndex - індекс масиву під час ітерації.
 *                     fromIndex >=  array.length - ПОШУК  З КІНЦЯ МАСИВУ!!!
 *                     fromIndex < 0,  fromIndexCount = array.length + fromIndex,
 *                     fromIndexCount < 0 - ПОШУК НЕ ВІДБУВАЄТЬСЯ ЗАВЖДИ ВЕРНЕ -1 !!!
 *  return index.
 */

// arr.lastIndexOf(searchElement, fromIndex)

let obj = {name: 'Roman'};

const array = [1, 2, 'Hello', 3, '5', obj, 'Hello', 88];

console.log(array.lastIndexOf('Hello')); // 6
console.log(array.lastIndexOf('Hello', 4 )); // 2
console.log(array.lastIndexOf('Hello', 50 )); // 6 бо більше за розмір масиву і почне пошук х кінця!!!
console.log(array.lastIndexOf('Hello', 2)); // 2
console.log(array.lastIndexOf('Hello', 1)); // -1
console.log(array.lastIndexOf('Hello', -6)); // 2 бо fromIndex = arr.length + (-6) = 8 - 6 = 2
console.log(array.lastIndexOf('Hello', -7)); // -1 бо fromIndex = arr.length + (-7) = 8 - 7 = 1
console.log(array.lastIndexOf('Hello', -50)); // -1 бо fromIndex = arr.length + (-50) = 8 - 50 = -42, if < 0 ЗАВЖДИ -1 ПОШУК НЕ ВІДБУВАЄТЬСЯ!!!


console.log(array.lastIndexOf({name: 'Roman'})); // -1 бо це інший обєкт.
console.log(array.lastIndexOf(obj)); // 5 бо це посилання на обєкт.

