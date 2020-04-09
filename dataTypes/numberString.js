console.log(1 + 'string');// 1string
console.log(typeof (1 + 'string'));// string
console.log('*****************');

console.log(1 + '');// 1
console.log(typeof (1 + ''));// string
console.log('*****************');

console.log(1 - 'string');// NaN
console.log(typeof (1 - 'string'));// number
console.log('*****************');

console.log(1 - '');// 1
console.log(typeof (1 - ''));// number
console.log('*****************');

console.log(1 * 'string');// NaN
console.log(typeof (1 * 'string'));// number
console.log('*****************');

console.log(1 * '');// 0
console.log(typeof (1 * ''));// number
console.log('*****************');

console.log(1 / 'string');// NaN
console.log(typeof (1 * 'string'));// number
console.log('*****************');

console.log(1 / '');// Infinity
console.log(typeof (1 * ''));// number
console.log('*****************');

console.log('string' / 1);// NaN
console.log(typeof ('string' / 1));// number
console.log('*****************');

console.log('' / 1);// 0
console.log(typeof ('' / 1));// number
console.log('*****************');
