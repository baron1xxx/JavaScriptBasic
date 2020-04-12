/**
 * @param index - integer number
 * return char. Якщо index не існує то поверне пусту строку!!!
 */
// str.charAt(index)

let str = 'Hello word!';

console.log(str.charAt());// 'H'
console.log(str.charAt(0));// 'H'
console.log(str.charAt(1));// 'e'
console.log(str.charAt(2));// 'l'
console.log(str.charAt(3));// 'l'
console.log(str.charAt(4));// 'o'
console.log(str.charAt(5));// ' ' - spase
console.log(str.charAt(6));// 'w'
console.log(str.charAt(7));// 'o'
console.log(str.charAt(8));// 'r'
console.log(str.charAt(9));// 'd'
console.log(str.charAt(10));// '!'

console.log(str.charAt(str.length - 1));// '!'

console.log(str.charAt(11),);// '' - empty string.
console.log(str.charAt(-3),);// '' - empty string.
console.log('***********');
