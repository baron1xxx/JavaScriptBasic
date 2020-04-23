/**
 * Перевіряє чи кожен елемент масиву задовільняє умову у callback.
 *@param callback (
 * element - елемент масиву під час ітераціїб
 *  index - індекс масиву під час ітераціїб
 *  array - сам масив) - перевіряє кожен елемент масиву чи він відповідає заданій умові.
 *@param thisArg - значення яке буде використовуватись як this у callback.
 *  return boolean
 */
// arr.every(callback(element, index, array)

let arr1 = [6, 12, '15', 100];

const arr2 = arr1.every((element, index, array) => {
    console.log(element);
    console.log(index);
    console.log(array);
    console.log(typeof element === 'string');
    return typeof element === 'string'
});
console.log(arr2); // false

let arr3 = ['Hello', '6', '12', '15', '100'];

const arr4 = arr3.every((element, index, array) => {
    console.log(element);
    console.log(index);
    console.log(array);
    console.log(typeof element === 'string');
    return typeof element === 'string'
});
console.log(arr4); // true


// Чи біжить до кінця масиву чи зупиняється при задовільненні умови

const array2 = [1,'Hello', 2, 3,'5', {name: 'Roman'}, 'Hello', 'word' ];
const filter = array2.every((el) => {
    console.log(el);
    return el === 'Hello'
});
console.log(filter);
