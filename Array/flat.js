/**
 * Вирівнювання масиву до вказаної глибини.
 * @param depth - глибина (ціле число, за замовчуванням 1)
 * return array
 */

// arr.flat(depth);

let arr = [1, 2, 3, [4, 5, [6, 7, [8, [9]]]], 'Hello'] // 4 вложеності

// console.log(arr.flat(2)); // [ 1, 2, 3, 4, 5, 6, 7, [ 8, [ 9 ] ] ] - лишилося 2 вложеності.
// console.log(arr.flat(4)); // [ 1, 2, 3, 4, 5, 6, 7,  8,  9  ]] - нема вложеності.
// console.log(arr.flat(-3)); // [ 1, 2, 3, 4, 5, 6, 7,  8,  9  ]] - нема вложеності.


// *********** АЛЬТЕРНАТИВНІ ВАРІАНТИ *************
function flattenDeep(arr1) {
    return arr1.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []);
}

console.log(flattenDeep(arr));;


let flattenDeepArray = [];
function f(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(flattenDeepArray);
        if (Array.isArray(arr[i])) {
            flattenDeepArray.concat(f(arr[i]))
        } else {
            flattenDeepArray =  flattenDeepArray.concat(arr[i])
        }
    }
}

f(arr);
console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!');
console.log(flattenDeepArray);
console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!');

