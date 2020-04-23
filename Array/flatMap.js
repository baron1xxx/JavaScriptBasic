/**
 * Спочатку виконує callback на кожному елементі масива а потім вирівнює його до глибини 1!!!.
 *@param callback (
 *  element - елемент масиву під час ітераціїб
 *  index - індекс масиву під час ітераціїб
 *  array - сам масив
 *@param thisArg - значення яке буде використовуватись як this у callback.
 *  return new array.
 */

// arr.flatMap(callback(currentValue, index, array). this.Arg)

let arr = [1,2,3, [4,5]];
let thisArg = [];

const flatMapArray = arr.flatMap((el, index, array) => {
    return el;
});
console.log(flatMapArray);

let arr1 = ["Сьогодні сонячно у", "", "Львові"];
const strings = arr1.flatMap(function(el) {
    this.push(el)
    return el.split(' ')
}, thisArg);
console.log(strings);
console.log('************');
console.log(thisArg);
