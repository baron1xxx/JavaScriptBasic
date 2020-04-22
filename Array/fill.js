/**
 * Заповнює або змінює елементи масива статичними даними.
 * @param value
 * @param startIndex
 *                  if startIndex < 0  startIndex = arr.length + startIndex,
 *                  if startIndex > arr.length  - масив не змінюється.
 * @param endIndex
 * return модифікований (змінений) масив
 */

// arr.fill(value, startIndex, endIndex)

const array = [1, 2, 3,'5', {name: 'Roman'}, 'Hello' ];
console.log(array.fill(0)); // [ 0, 0, 0, 0, 0, 0 ]
// !!!!! МОДИФІКУЄ МАСИВ !!!!!
console.log(array); // [ 0, 0, 0, 0, 0, 0 ]


console.log([1, 2, 3,'5', {name: 'Roman'}, 'Hello' ].fill(0, 2, 5)); // [ 1, 2, 0, 0, 0, 'Hello' ]

// startIndex = arr.length + (-2) = 6-2 =4
console.log([1, 2, 3,'5', {name: 'Roman'}, 'Hello' ].fill(0, -2, 5)); // [ 0, 0, 0, 0, 0, 0 ]

// startIndex > arr.length Масив не міняється
console.log([1, 2, 3,'5', {name: 'Roman'}, 'Hello' ].fill(0, 10, 5)); // [ 1, 2, 3, '5', { name: 'Roman' }, 'Hello' ]

// Змінює масив не міняючи довжини
console.log([1, 2, 3,'5', {name: 'Roman'}, 'Hello' ].fill(0, 2, 15)); // [ 1, 2, 0, 0, 0, 0 ]



console.log([1, 2, 3,'5', {name: 'Roman'}, 'Hello' ].fill(0, 2, -3)); // [ 1, 2, 0, '5', { name: 'Roman' }, 'Hello' ]
// Не міняє бо кінцевий індек менший за початковий=2,  endIndex = 6 - 5 = 1.
console.log([1, 2, 3,'5', {name: 'Roman'}, 'Hello' ].fill(0, 2, -5)); // [ 1, 2, 3, '5', { name: 'Roman' }, 'Hello' ]

// startIndex =  arr.length - 50 = 6 - 50 = -44 < 0  - ПОЧИНАЄ СПОЧАТКУ МАСИВУ, тому поміняло весь масив.
console.log([1, 2, 3,'5', {name: 'Roman'}, 'Hello' ].fill(0, -50)); // [ 0, 0, 0, 0, 0, 0 ]




console.log([1, 2, 3,'5', {name: 'Roman'}, 'Hello' ].fill(0, '2')); // [ 1, 2, 0, 0, 0, 0 ]
console.log([1, 2, 3,'5', {name: 'Roman'}, 'Hello' ].fill(0, true)); // [ 1, 0, 0, 0, 0, 0 ]
console.log([1, 2, 3,'5', {name: 'Roman'}, 'Hello' ].fill(0, '2', null)); // [ 1, 2, 3, '5', { name: 'Roman' }, 'Hello' ]

console.log([1, 2, 3,'5', {name: 'Roman'}, 'Hello' ].fill(0, undefined)); // [ 0, 0, 0, 0, 0, 0 ]
console.log([1, 2, 3,'5', {name: 'Roman'}, 'Hello' ].fill(0, 2, undefined)); // [ 1, 2, 0, 0, 0, 0 ]
