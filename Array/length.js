/**
 * Повертає або встановлює розмір масиву.
 */

let arr = [2, 5, '10', {name: 'Roman'}, [1, 1, 2, 3, 5], 'Hello'];
 console.log(arr.length); // 6 - повертає розмір масиву
console.log(arr); // [ 2, 5, '10', { name: 'Roman' }, [ 1, 1, 2, 3, 5 ], 'Hello' ]

arr.length = 12;
console.log(arr.length); // 12
console.log(arr);// [ 2, 5, '10', { name: 'Roman' }, [ 1, 1, 2, 3, 5 ], 'Hello', <6 empty items> ]
