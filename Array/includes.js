/**
 *@param valueToFind - значення яке шукається в масиві
 *@param fromIndex - індекс з якого починається пошук
 *            fromIndex >=  array.length - ПОШУК НЕ ВІДБУВАЄТЬСЯ І ЗАВЖДИ ПОЛВЕРНЕ 'false'!!!
 *            fromIndex < 0,  fromIndexCount = array.length + fromIndex,
 *            fromIndexCount < 0 - ПОШУК З ПОЧАТКУ МАСИВУ.
 * return boolean
 */
// arr.includes(valueToFind, fromIndex)

console.log([6, 12, '15', 100, 0, -0, +0, true, false, null, undefined].length);

console.log([6, 12, '15', 100, 0, -0, +0, true, false, null, undefined].includes(100, 3)); // true
console.log([6, 12, '15', 100, 0, -0, +0, true, false, null, undefined].includes(100, 4)); // false

console.log([6, 12, '15', 100, 0, -0, +0, true, false, null, undefined].includes(100, 11)); // false - індекс більший за довжину масиву!!!

console.log([6, 12, '15', 100, 0, -0, +0, true, false, null, undefined].includes(100, -7)); // false  - пошук починається з 11 +(-7) = 4 а 100 це 3
console.log([6, 12, '15', 100, 0, -0, +0, true, false, null, undefined].includes(100, -9)); // true  - пошук починається з 11 +(-9) = 2 а 100 це 3
console.log([6, 12, '15', 100, 0, -0, +0, true, false, null, undefined].includes(100, -80)); // true  - пошук починається з 11 +(-80) = -69  ПОШУК З ПОЧАТКУ МАСИВА!!!


console.log([6, 12, '15', 100, 0, -0, +0, true, false, null, undefined].includes(100, 11)); // false - індекс більший за довжину масиву!!!

console.log([6, 12, '15', 100, 0, -0, +0, true, false, null, undefined].includes(6)); // true
console.log(['6', 12, '15', 100, 0, -0, +0, true, false, null, undefined].includes(6)); // false

console.log(['6', 12, '15', 100, +0, true, false, null, undefined].includes(0)); // true
console.log(['6', 12, '15', 100, -0, true, false, null, undefined].includes(0)); // true
console.log(['6', 12, '15', 100, 0, true, false, null, undefined].includes(0)); // true
console.log(['6', 12, '15', 100, true, false, null, undefined].includes(0)); // false

console.log([6, 12, '15', 100, 0, -0, +0, true, false, null, undefined].includes(true)); // true
console.log([6, 12, '15', 100, 0, -0, +0, false, null, undefined].includes(true)); // false


console.log([6, 12, '15', 100, 0, -0, +0, true, false, null, undefined].includes(false)); // true
console.log([6, 12, '15', 100, 0, -0, +0, true, null, undefined].includes(false)); // false

console.log([6, 12, '15', 100, 0, -0, +0, true, false, null, undefined].includes(null)); // true
console.log([6, 12, '15', 100, 0, -0, +0, true, false, '', undefined].includes(null)); // false
console.log([].includes(null)); // false


console.log([6, 12, '15', 100, 0, -0, +0, true, false, null, undefined].includes(undefined)); // true
console.log([6, 12, '15', 100, 0, -0, +0, true, false, null].includes(undefined)); // false


