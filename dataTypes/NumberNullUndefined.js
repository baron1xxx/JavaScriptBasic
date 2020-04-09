/**
 null = 0
 undefined всюди буде NaN typeof 'number'
 */

console.log(1 + null);// 1
console.log(typeof (1 + null));// number

console.log(1 + undefined);// NaN
console.log(typeof (1 + undefined));// number

console.log(1 - null);// 1
console.log(typeof (1 - null));// number

console.log(1 - undefined);// NaN
console.log(typeof (1 - undefined));// number

console.log(1 * null);// 0
console.log(typeof (1 * null));// number

console.log(1 * undefined);// NaN
console.log(typeof (1 * undefined));// number

console.log(1 / null);// Infinity
console.log(typeof (1 / null));// number
console.log(0 / null);// NaN
console.log(typeof (1 / null));// number

console.log(1 / undefined);// NaN
console.log(typeof (1 / undefined));// number

console.log(null + undefined);// NaN
console.log(typeof (null + undefined));// number

console.log(null - undefined);// NaN
console.log(typeof (null - undefined));// number

console.log(null * undefined);// NaN
console.log(typeof (null * undefined));// number

console.log(null / undefined);// NaN
console.log(undefined / null);// NaN
console.log(typeof (null / undefined));// number
