/**
 * Повертає дрібну копію масива (від beginIndex до endIndex - НЕ ВКЛЮЧНО!!!)
 * return array
 */

// arr.slice([beginIndex, endIndex)

const array = [1, 2, 3,'5', {name: 'Roman'}, 'Hello' ];
console.log(array.length);// length 6

console.log(array.slice()); // [ 1, 2, 3, '5', { name: 'Roman' }, 'Hello' ]
console.log(array.slice(4)); // [ { name: 'Roman' }, 'Hello' ]
console.log(array.slice(2, 5)); // [ 3, '5', { name: 'Roman' } ]


console.log(array.slice(-3)); // [ 3, '5', { name: 'Roman' } ] бо починає з 3. !!! beginIndex = 6 + (-3) = 3 !!!
console.log(array.slice(-30)); // [ 1, 2, 3, '5', { name: 'Roman' }, 'Hello' ] бо починає з початку. !!! beginIndex = 6 + (-30) = -24 !!!


console.log(array.slice(2, -2)); // [ 3, '5' ] бо починає з початку. !!! beginIndex = 6 + (-2) = 4 !!!
console.log(array.slice(2, -20)); // [] бо починає з початку. !!! beginIndex = 6 + (-20) = -14 !!!
