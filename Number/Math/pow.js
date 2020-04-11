// Math.pow(x, y) - піднесення основи(x) до степення(y).

console.log(Math.pow(2, 3));// 8
console.log(Math.pow('2', '5'));// 32
console.log(Math.pow(4, 0));// 1
console.log(Math.pow(4, null));// 1
console.log(Math.pow(4, false));// 1
console.log(Math.pow(4, true));// 4
console.log(Math.pow(4, -2));// 0.0625
console.log(Math.pow(0, 0));// 1
console.log(Math.pow(5, undefined));// NaN
console.log(Math.pow(Infinity, 2));// Infinity
console.log(Math.pow(Infinity, 0));// 1
console.log(Math.pow(0, 8));// 0
console.log(Math.pow(0, Infinity));// 0
console.log(Math.pow(1, Infinity));// NaN
console.log(Math.pow(2, Infinity));// Infinity
