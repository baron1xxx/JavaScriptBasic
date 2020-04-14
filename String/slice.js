/**
 * @param beginSlice - початковий індекс. Якщо значення менше 0 то індекс = strLength + beginSlice (beginSlice = 10 + (-3)) = 7.
 * @param endSlice - кінцевий індекс. Якщо значення менше 0 то індекс = strLength + endSlice (endSlice = 8 + (-3)) = 5. (не включаючи його).
 * return subStr  - витягує частину строки та повертає нову строку не міняючи основної.
 */
let str = 'Hello word';
console.log(str); // 'Hello word'
const s = str.slice(0,5);
console.log(s); // Hello
console.log(str); // 'Hello word' - str не міняється

// str.slice(beginSlice, endSlice)
console.log(str.length);// 10

// [[0: 'H'], [1: 'e'], [2: 'l'], [3: 'l'], [4: 'o], [5: ' '], [6: 'w'], [7: 'o'], [8: 'r'], [9: 'd']]

console.log(str.slice(6));// 'word'
console.log(str.slice(6, 9));// 'wor'
console.log(str.slice(0, 1));// 'H'
console.log(str.slice(6, -2));// 'wo'
console.log(str.slice(-8, -2));// 'llo wo'
console.log(str.slice(5, 1));// '' - empty string.

console.log(str.slice('1'));// 'ello word'
console.log(str.slice('1', '8'));// 'ello wo'
console.log(str.slice('1', '8'));// 'ello wo'



console.log(str.slice(false, true));// 'H'
console.log(str.slice(null, true));// 'H'

console.log(str.slice(undefined));// 'Hello word'
console.log(str.slice(100));// 'Hello word' - Якщо індекс більший ніж довжина стрічки то повернеться пуста строка.

// console.log('Hello word'.slice(0, 100));// 'Hello word' - Якщо кінцеви індекс не існує то до кінця строки.
// console.log('Hello word'.slice(null, undefined));// 'Hello word' - Якщо кінцевий індекс не існує то до кінця строки.

