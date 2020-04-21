// **************** new Array ***************
let array = new Array(10); // Створює масив з пустими значеннями відповідного розміру.
console.log(array);// [ <10 empty items> ] - пустий масив роміром 10.
console.log(array.length);// 10

let array2 = new Array('10'); // Створює масив з одним елементом "10".
console.log(array2);// [ '10' ].
console.log(array2.length);// 1

// **************** array = [] ***************

let arr = []; // - створення пустого масиву.
console.log(arr); // []
console.log(arr.length); // 0

arr.length = 10; // встановлює розмір масиву
console.log(arr); // [ <10 empty items> ]

arr[1] = 'Hello'; // встановлюэмо значення в масив пыд ындексом 2
console.log(arr[1]); // 'Hello'
