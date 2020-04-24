/**
 * Змыныю вмыст масиву видаляючи або додаючи новы елементи
 * @param startIndex - ндекс з якого починаються зміни в масив.
 *     if startIndex < 0, startIndex = arr.length + startIndex
 *     if startIndex < 0, startIndex = arr.length + startIndex < 0 startIndex = 0!!!
 *     if startIndex > arr.length, startIndex = arr.length!!!
 * @param deleteCount - кількість елементів які потрібно видалити
 *     if deleteCount НЕ ВКАЗАНО - видаляє до кінця масиву
 *     if deleteCount >= arr.length - startIndex  - видаляє до кінця масиву
 *     if deleteCount = 0 || deleteCount < 0  - видалення не буде
 * @params item1, item2, ... itemN - елементи які будуть вставленні починаючи із startIndex.
 * return new array з ВИДАЛЕНИМИ ЕЛЕМЕНТАМИ!!!
 */

// array.splice(startIndex, deleteCount, item1, item2, ... itemN)

const array = [1, 2, 'Hello', 3, '5', {name: 'Roman'}, 'Hello', 88];

// console.log(array.splice(2));// [ 'Hello', 3, '5', { name: 'Roman' }, 'Hello', 88 ]
// console.log(array); // [ 1, 2 ]

// console.log(array.splice(-2));// [ 'Hello', 88 ]
// console.log(array); // [ 1, 2, 'Hello', 3, '5', { name: 'Roman' } ]

// console.log(array.splice(-20)); // [ 1, 2, 'Hello', 3, '5', { name: 'Roman' }, 'Hello', 88 ]
// console.log(array); // []

// console.log(array.splice(6, 2)); // [ 'Hello', 88 ]
// console.log(array); // [ 1, 2, 'Hello', 3, '5', { name: 'Roman' } ]

// console.log(array.splice(4, 10)); // [ '5', { name: 'Roman' }, 'Hello', 88 ]
// console.log(array); // [ 1, 2, 'Hello', 3 ]

// console.log(array.splice(4, -1)); // []
// console.log(array); // [ 1, 2, 'Hello', 3, '5', { name: 'Roman' }, 'Hello', 88 ]

console.log(array.splice(4, 2, 'word', 'hi', 'yo')); // [ '5', { name: 'Roman' } ]
console.log(array); // [1, 2, 'Hello', 3, 'word', 'hi', 'yo', 'Hello', 88]

