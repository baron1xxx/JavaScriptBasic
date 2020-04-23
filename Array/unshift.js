/**
 * Додає елементи напочаток масива.
 * return нову довжину масиву.
 */

// arr.unshift(element1, ..., elementN)
let arr = ['a', 'b', 'c'];

console.log(arr.unshift('d', 'e')); // 5.
console.log(arr);// [ 'd', 'e', 'a', 'b', 'c' ]
console.log([].unshift('d', 'e')); // 2.
