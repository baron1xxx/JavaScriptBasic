/**
 * Повертаэ index елемента що шукається або -1, якщо не знайдено.
 * @param searchElement - елемент масиву який шукається.
 * @param fromIndex - індекс масиву під час ітерації.
 *                     fromIndex >=  array.length - ПОШУК НЕ ВІДБУВАЄТЬСЯ І ЗАВЖДИ ПОЛВЕРНЕ 'false'!!!
 *                     fromIndex < 0,  fromIndexCount = array.length + fromIndex,
 *                     fromIndexCount < 0 - ПОШУК З ПОЧАТКУ МАСИВУ.
 *  return index.
 */

// arr.indexOf(searchElement, fromIndex)

    let obj = {name: 'Roman'}

const array = [1, 2,'Hello', 3,'5', obj,'Hello', 88];

console.log(array.indexOf('Hello')); // 2
console.log(array.indexOf('Hello', 4 )); // 6
console.log(array.indexOf('Hello', 50 )); // -1 бо більше за розмір масиву
console.log(array.indexOf('Hello', 0)); // 2
console.log(array.indexOf('Hello', -6)); // 2 бо fromIndex = arr.length + (-6) = 8 - 6 = 2
console.log(array.indexOf('Hello', -5)); // 6 бо fromIndex = arr.length + (-5) = 8 - 5 = 3
console.log(array.indexOf('Hello', -50)); // 2 бо fromIndex = arr.length + (-50) = 8 - 50 = -42, if < 0 з початку масиву.



console.log(array.indexOf({name: 'Roman'})); // -1 бо це інший обєкт.
console.log(array.indexOf(obj)); // 5 бо це посилання на обєкт.

