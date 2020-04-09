// Number to String

let num = 10;
let str = 'string';

let value;

// ********** Number to String ************

value = 20 + '';
console.log(value); // 20
console.log(typeof value); // string

value = 20 + 'nghmhjmj';
console.log(value); // 20nghmhjmj
console.log(typeof value); // string

value = String(10);
console.log(value); // 10
console.log(typeof value); // string

value = String(10 + 10);
console.log(value); // 20
console.log(typeof value); // string

value = String(10 + 10 + 'fvfbgb');
console.log(value); // 20fvfbgb
console.log(typeof value); // string

value = (40).toString();
console.log(value); // 40
console.log(typeof value); // string

// ********** Boolean NULL Undefined to String ************
value = 'string' + true;
console.log(value); // stringtrue
console.log(typeof value); // string

value = '5' + true;
console.log(value); // 5true
console.log(typeof value); // string

value = 'string' + false;
console.log(value); // stringfalse
console.log(typeof value); // string

value = '5' + false;
console.log(value); // 5false
console.log(typeof value); // string

value = 'string' + null;
console.log(value); // stringnull
console.log(typeof value); // string

value = '5' + undefined;
console.log(value); // 5undefined
console.log(typeof value); // string

value = 'string' - null;
console.log(value); // NaN
console.log(typeof value); // number

value = '5' - undefined;
console.log(value); // NaN
console.log(typeof value); // number

// ********** Array to String ************

value = String([1, 2, 5]);
console.log(value); // 1,2,5
console.log(typeof value); // string

value = String([1, 2, {name: 'Ivan'}]);
console.log(value); // 1,2,[object Object]
console.log(typeof value); // string

value = String([1, 2,JSON.stringify({name: 'Ivan'})]);
console.log(value); // 1,2,{"name":"Ivan"}
console.log(typeof value); // string


