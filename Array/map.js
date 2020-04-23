/**
 * Повертає новий масив по результатам відпрацювання callback.
 * @param callback (
 *      element - елемент масиву під час ітераціїб
 *      index - індекс масиву під час ітераціїб
 *      array - сам масив) - перевіряє кожен елемент масиву чи він відповідає заданій умові.
 * @param thisArg - значення яке буде використовуватись як this у callback.
 * return array
 */
// arr.map(function callback(currentValue, index, array){}, thisArg)

// const array = [1, 2,'Hello', 3,'5', {name: 'Roman'}, 'Hello' ];
//
// const arr1 = array.map((el) => {
//     return el.toString() + 'BLA'
// });
// console.log(arr1); // ['1BLA','2BLA', 'HelloBLA', '3BLA', '5BLA', '[object Object]BLA', 'HelloBLA']
//
// const arr2 = array.map((el) => {
//     return el
// });
// console.log(arr2); //  [ 1, 2, 'Hello', 3, '5', { name: 'Roman' }, 'Hello' ]
//
// arr2[5].name = 'Ivan';
// console.log(arr2); // [ 1, 2, 'Hello', 3, '5', { name: 'Ivan' }, 'Hello' ]
// console.log(array); // [ 1, 2, 'Hello', 3, '5', { name: 'Ivan' }, 'Hello' ]
