/**
 * Копіює частину масиву та вставлює у вказану позицію масива, нге міняючи довжини масиву.
 * Тобто замінює поточні елементи масива на скопійовані.
 *@param targetIndex - індекс куди вставляти скопійовану частину масиву.
 *@param startIndex - індекс з якого починати копіювання.
 *@param endIndex - індекс яким закінчквати копіювання НЕ ВКЛЮЧНО!!!.
 * return modified array МОДИФІКУЄ початковий масив БЕЗ ЗМІНИ ДОВЖИНИ!!!
 */

// arr.copyWithin(targetIndex, startIndex, endIndex]])

let arr1 = [1, 2, 3, 4, 5, 6];
console.log(arr1); // [ 1, 2, 3, 4, 5, 6 ]
// console.log(arr1.copyWithin(0, 3, 5)); // [ 4, 5, 3, 4, 5, 6 ]
console.log(arr1.copyWithin(-3, 3, 5));
console.log(arr1.copyWithin(-2, 3, 5));
console.log(arr1.copyWithin(-1, 3, 5));
// console.log(arr1); // [ 4, 5, 3, 4, 5, 6 ] ЗМІНИЛИСЯ ПОЧАТКОВІ ЗНАЧЕННЯ МАСИВУ!!!
