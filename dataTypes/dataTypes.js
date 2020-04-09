/**
 * Number [25, 1.365, NaN, Infinity]
 * String 'string', "string", `string`
 * Boolean [true, false]
 * Null null
 * Undefined undefined
 * Symbol()
 */

// ***************** Number *****************
let num1 = 1;
let num2 = 1.9654;
let num3 = NaN;
let num4 = Infinity;

// console.log(typeof num1); // number
// console.log(typeof num2); // number
// console.log(typeof num3); // number
// console.log(typeof num4); // number

/**
 * При додаванні typeof 'number' завжди typeof 'number'.
 * number + number = number;
 * number + NaN = NaN;
 * number + Infinity = Infinity;
 * NaN + Infinity = NaN;
 */

// console.log(1 + 1.5);// 2.5
// console.log(typeof (1 + 1.5));// number
//
// console.log(1 + NaN);// NaN
// console.log(typeof (1 + NaN));// number
//
// console.log(1 + Infinity);// Infinity
// console.log(typeof (1 + Infinity));// number
//
// console.log(NaN + Infinity);// NaN
// console.log(typeof (NaN + Infinity));// number

/**
 * При відніманні typeof 'number' завжди typeof 'number'.
 * number - number = number;
 * number - NaN = NaN;
 * number - Infinity = -Infinity;
 * Infinity - number = Infinity;
 * NaN - Infinity = NaN;
 */
// console.log(1 - 1.5);// -0.5
// console.log(typeof (1 - 1.5));// number
// console.log('***************');
//
// console.log(1 - NaN);// NaN
// console.log(typeof (1 - NaN));// number
// console.log('***************');
//
// console.log(100000 - Infinity);// -Infinity
// console.log(Infinity - 100000);// Infinity
// console.log(typeof (1 - Infinity));// number
// console.log('***************');
//
// console.log(NaN - Infinity);// NaN
// console.log(typeof (NaN - Infinity));// number


/**
 * При множенні typeof 'number' завжди typeof 'number'.
 * number * number = number;
 * number * NaN = NaN;
 * number * Infinity = Infinity;
 * Infinity * number = Infinity;
 * NaN * Infinity = NaN;
 */
// console.log(2 * 1.5);// 3
// console.log(typeof (2 * 1.5));// number
// console.log('***************');
//
// console.log(1 * NaN);// NaN
// console.log(typeof (1 * NaN));// number
// console.log('***************');
//
// console.log(100000 * Infinity);// Infinity
// console.log(Infinity * 100000);// Infinity
// console.log(typeof (1 * Infinity));// number
// console.log('***************');
//
// console.log(NaN * Infinity);// NaN
// console.log(typeof (NaN * Infinity));// number
//
// console.log(0 * Infinity);// NaN
// console.log(typeof (0 * Infinity));// number


/**
 * При діленні typeof 'number' завжди typeof 'number'.
 * number / number = number;
 * number / NaN = NaN;
 * number / Infinity = 0;
 * Infinity / number = Infinity;
 * NaN / Infinity = NaN;
 */
// console.log(2 / 1.5);// 3
// console.log(typeof (2 / 1.5));// number
// console.log('***************');
//
// console.log(1 / NaN);// NaN
// console.log(typeof (1 / NaN));// number
// console.log('***************');
//
// console.log(100000 / Infinity);// 0
// console.log(Infinity / 100000);// Infinity
// console.log(typeof (1 / Infinity));// number
// console.log('***************');
//
// console.log(NaN / Infinity);// NaN
// console.log(Infinity/NaN);// NaN
// console.log(typeof (NaN / Infinity));// number

// console.log(0 / Infinity); // 0
// console.log(0 / NaN);// NaN
// console.log(Infinity / 0);// Infinity
// console.log(NaN / 0);// NaN
// console.log(0 / 0);// NaN
// console.log(NaN / NaN);// NaN
// console.log(Infinity / Infinity);// NaN

// ***************** String *****************

let str1 = 'Hello Word!!!';
let str2 = "Hello Word!!!";
let str3 = `Hello Word!!!`;
let str4 = '';


/**
 * При додаванні typeof 'string' завжди typeof 'string'.
 * string + string = string;
 */

// console.log('Hello Word!!!' + 'Hello Word2!!!'); // Hello Word!!!Hello Word2!!!
// console.log(typeof ('Hello Word!!!' + 'Hello Word2!!!')); // string
// console.log('********************');

/**
 * Всі решта арифметичні дії дадуть NaN і typeof 'number'.
 * string + string = string;
 */

// console.log('Hello Word!!!' - ''); // NaN
// console.log(typeof ('Hello Word!!!' - '')); // number
// console.log('********************');
//
// console.log('Hello Word!!!' - 'Hello Word2!!!'); // NaN
// console.log(typeof ('Hello Word!!!' - 'Hello Word2!!!')); // number
// console.log('********************');
//
// console.log('Hello Word!!!' * 'Hello Word2!!!'); // NaN
// console.log(typeof ('Hello Word!!!' * 'Hello Word2!!!')); // number
// console.log('********************');
//
// console.log('Hello Word!!!' * ''); // NaN
// console.log(typeof ('Hello Word!!!' * '')); // number
// console.log('********************');
//
// console.log('Hello Word!!!' / 'Hello Word2!!!'); // NaN
// console.log(typeof ('Hello Word!!!' / 'Hello Word2!!!')); // number
// console.log('********************');
//
// console.log('Hello Word!!!' / ''); // NaN
// console.log(typeof ('Hello Word!!!' / '')); // number
// console.log('********************');


// ***************** Boolean *****************

// let bool1 = true;
// let bool2 = false;
// // true = 1,  false = 0
// console.log(true + true); // 2
// console.log(typeof (true + true)); // number
// console.log('****************');
//
// console.log(true + false); // 1
// console.log(typeof (true + false)); // number
// console.log('****************');
//
// console.log(false + true); // 1
// console.log(typeof (false + true)); // number
// console.log('****************');
//
// console.log(true - true); // 0
// console.log(typeof (true - true)); // number
// console.log('****************');
//
// console.log(false - false); // 0
// console.log(typeof (false - false)); // number
// console.log('****************');
//
// console.log(false - true); // -1
// console.log(typeof (false - true)); // number
// console.log('****************');
//
// console.log(true - false); // 1
// console.log(typeof (true - false)); // number
// console.log('****************');
//
// console.log(true * false); // 0
// console.log(typeof (true - false)); // number
// console.log('****************');
//
// console.log(true / false); // Infinity
// console.log(typeof (true / false)); // number
// console.log('****************');
//
// console.log(false / true); // 0
// console.log(typeof (false / true)); // number
// console.log('****************');

// ***************** Null *****************

// let a = null;

// null = 0.

// console.log(null + null); // 0
// console.log(typeof (null + null)); // number
// console.log('****************');
//
// console.log(null - null); // 0
// console.log(typeof (null - null)); // number
// console.log('****************');
//
// console.log(null * null); // 0
// console.log(typeof (null * null)); // number
// console.log('****************');
//
// console.log(null / null); // NaN
// console.log(typeof (null / null)); // number
// console.log('****************');

// ***************** Undefined *****************

let a = undefined;

// null = 0.

console.log(undefined + undefined); // NaN
console.log(typeof (undefined + undefined)); // number
console.log('****************');

console.log(undefined - undefined); // NaN
console.log(typeof (null - null)); // number
console.log('****************');

console.log(undefined * undefined); // NaN
console.log(typeof (undefined * undefined)); // number
console.log('****************');

console.log(undefined / undefined); // NaN
console.log(typeof (undefined / undefined)); // number
console.log('****************');
