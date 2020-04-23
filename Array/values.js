/**
 * Повертає ітератор значень.
 * return Iterator
 */
// arr.values()
const array = ['a', 'b', 'c'];
const iterator = array.values();
console.log(iterator.next()); // { value: 'a', done: false }
console.log(iterator.next()); // { value: 'b', done: false }
console.log(iterator.next()); // { value: 'c', done: false }
console.log(iterator.next()); // { value: undefined, done: true }

