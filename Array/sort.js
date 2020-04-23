/**
 * Сортує масив відповідно до функції порівняння.
 * @param  callback compareFunction (a, b)
 *                                  a - перший елемент масива
 *                                  b - другий елемент масива
 * return sorted array
 */
// arr.sort(compareFunction)


// let numbers = [4, 2, 5, 1, 3];
// numbers.sort((a, b) => a - b);
// // СОРТУЄ ДАНИЙ МАСИВ а НЕ СТВОРЮЄ НОВИЙ!!!
// console.log(numbers); // [ 1, 2, 3, 4, 5 ]
//
// numbers.sort((a, b) => b - a);
// console.log(numbers); // [ 5, 4, 3, 2, 1 ]
// console.log(numbers.sort());// [ 1, 2, 3, 4, 5 ] СОРТУЄ по коду UTF-16 ЧИСЛА ПЕРЕТВОРЮЮТЬСЯ У РЯДКИ

console.log([25, 3, 8, 46, 7, 69].sort((a, b) => a - b));// [ 3, 7, 8, 25, 46, 69 ]
console.log([25, 3, 8, 46, 7, 69].sort());// [ 25, 3, 46, 69, 7, 8 ] Тут числа строки бо не задана умова


const items = [
    {name: 'Edward', value: 21},
    {name: 'Sharpe', value: 37},
    {name: 'And', value: 45},
    {name: 'The', value: -12},
    {name: 'Magnetic', value: 13},
    {name: 'Zeros', value: 37}
];

items.sort((a, b) => {
    return a.value - b.value
});
console.log(items);
/*
[
    { name: 'The', value: -12 },
    { name: 'Magnetic', value: 13 },
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'Zeros', value: 37 },
    { name: 'And', value: 45 }
]
*/

