let str1 = 'Hello word!!!';
// console.log(str1); // Hello word!!!
let str2 = "Hello word!!!";
// console.log(str2); // Hello word!!!
// let str3 =`1 - Hello word!!! 2 - ${str1} 3 - ${str2}`; // дозволяють використовувати змінні.
// console.log(str3); // 1 - Hello word!!! 2 - Hello word!!! 3 - Hello word!!!

/**
 * При додаванні typeof 'string' завжди typeof 'string'.
 * string + (string, number, true, false, undefined, Infinity) = string;
 */
console.log(str1 + ' ' + 'I am' + ' ' + 25 + '!!!!!'); // Hello word!!! I am 25!!!!!
console.log('string' + true);// stringtrue
console.log('string' + false);// stringfalse
console.log('string' + null);// stringnull
console.log('string' + undefined);// stringundefined
console.log('string' + Infinity);// stringInfinity

/**
 * Всі решта арифметичні дії дадуть NaN і typeof 'number'.
 */

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
console.log(typeof 'str'); /* string*/
console.log(typeof String('str')); // string
console.log(typeof new String('str')); // object
