/**
 * Удаляє перший елемент масива.
 * return елемент який видалено.
 */

// arr.shift()
const arr = ['a', 'b', 'c'];
console.log(arr.shift()); // a.
console.log([].shift()); // undefined.

// ***!!!!! Міняє масив!!!!***
console.log(arr);// [ 'b', 'c' ]

