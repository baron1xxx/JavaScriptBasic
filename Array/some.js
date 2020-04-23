/**
 * Перевіряє чи хочаб один елемент масиву задовільняє умову у callback.
 *@param callback (
 * element - елемент масиву під час ітераціїб
 *  index - індекс масиву під час ітераціїб
 *  array - сам масив) - перевіряє чи хочаб один елемент масиву відповідає заданій умові.
 *@param thisArg - значення яке буде використовуватись як this у callback.
 *  return boolean
 */
// arr.some(callback(element, index, array, thisArg)

let arr1 = [6, 12, '15', 100];

const arr2 = arr1.some((element, index, array) => {
    console.log(element);
    console.log(index);
    console.log(array);
    console.log(typeof element === 'string');
    return typeof element === 'string'
});
console.log(arr2); // true

let arr3 = ['Hello','6', '12', '15', '100'];

const arr4 = arr3.every((element, index, array) => {
    console.log(element);
    console.log(index);
    console.log(array);
    console.log(typeof element === 'string');
    return typeof element === 'number'
});
console.log(arr4); // false


// Чи біжить до кінця масиву чи зупиняється при задовільненні умови

const array2 = [1,'Hello', 2, 3,'5', {name: 'Roman'}, 'Hello', 'word' ];
const filter = array2.some((el) => {
    console.log(el);
    return el === 'Hello'
});
console.log(filter);
