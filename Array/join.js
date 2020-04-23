/**
 * Повертає строку розділену сепаратором.
 * @param separator - строка яка розділить елементи масивуб якщо не вказаний розділить комою.
 * return string.
 */

// arr.join(separator]

const array = [1, 2,'Hello', 3,'5', {name: 'Roman'}, 'Hello' ];

console.log(array.join(' _ ')); // 1 _ 2 _ Hello _ 3 _ 5 _ [object Object] _ Hello
console.log(array.join()); // 1,2,Hello,3,5,[object Object],Hello
console.log(array.join(null)); // 1null2nullHellonull3null5null[object Object]nullHello
console.log([].join()); // '' - empty string.
console.log(typeof [].join()); // string
