/**
 * Повертає ітератор ключів.
 * return Iterator
 */
// arr.keys()
const array = ['a', 'b', 'c'];
const iterator = array.keys();
console.log(iterator.next()); // { value: 0, done: false }
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: undefined, done: true }

