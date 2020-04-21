/**
 *@param callback (
 * element - елемент масиву під час ітераціїб
 *  index - індекс масиву під час ітераціїб
 *  array - сам масив) - перевіряє чи хочаб один елемент масиву відповідає заданій умові.
 *  return boolean
 */
// arr.some(callback(element, index, array)

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
