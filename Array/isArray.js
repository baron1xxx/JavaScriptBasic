/**
 * Перевіряє чи передане значення є масивом
 * return boolean
 */
// Array.isArray(value)

console.log(Array.isArray([1, 5, 'Hello', [9, 8], {name: 'Roman'}])); // true
console.log(Array.isArray(125)); // false
console.log(Array.isArray('Hello')); // false
console.log(Array.isArray('Hello', 5, [5, 9 ,8])); // false
console.log(Array.isArray([5, 9 ,8], 'Hello', 5, )); // true - приймає один аргумент тому і перевіряє тільки перший аргумент!!!
