/**
 * Створює новий масив з елементами які пройшли перевірку (задовільнили умову у callback).
 *@param callback (
 * element - елемент масиву під час ітераціїб
 *  index - індекс масиву під час ітераціїб
 *  array - сам масив) - перевіряє чи хочаб один елемент масиву відповідає заданій умові.
 *@param thisArg - значення яке буде використовуватись як this у callback.
 *  return new array.
 */

// arr.filter(callback(element, index, array),thisArg)

const array = [1, 2, 3,'5', {name: 'Roman'}, 'Hello' ];

const filterArray = array.filter(function (el, index, array) {
    console.log(el);
    console.log(index);
    console.log(array);
    console.log('------------------------');
    console.log(this);
    console.log('------------------------');
    console.log('****************************');
    return el === this[3]
}, ['a', 'd', 'c', 'Hello']);
console.log(filterArray); // [ 'Hello' ]

const filterArray2 = array.filter(function (el) {
    return typeof el === 'object'
}, ['a', 'd', 'c', 'Hello']);

filterArray2[0].name = 'Ivan';
console.log(filterArray2);
console.log(array);
console.log('-----------------------------------------');
filterArray2[0] = {name: 'Sasha'};
console.log(filterArray2);
console.log(array);


// Чи біжить до кінця масиву чи зупиняється при задовільненні умови

const array2 = [1,'Hello', 2, 3,'5', {name: 'Roman'}, 'Hello', 'word' ];
const filter = array2.filter((el) => {
    console.log(el);
    return el === 'Hello'
});
console.log(filter);
