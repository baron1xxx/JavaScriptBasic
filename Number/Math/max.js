// Math.max - повертає найбільше число із поданих на вхід або NaN, яко не може бути перетвореним у число.

console.log(Math.max(1, 5, 9, -1, -10, 0, -12.111)); // 9
console.log(Math.max(1, 5, 9, -1, '100', 0)); // 100
console.log(Math.max(2, false, true, 46)); // 46
console.log(Math.max(0, null, true)); // 1 'true == 1'
console.log(Math.max(2, null, true, Infinity, -Infinity)); // Infinity
console.log(Math.max(2, null, true, Infinity, -Infinity, undefined)); // NaN бо undefined.

let arr = [8, 9, '-15', 100];
console.log(Math.max(...arr)); // 100.

arr = [8, 9, '-15', 100, Infinity];
console.log(Math.max(...arr)); // Infinity.

arr = [8, 9, '15'*30, 100];
console.log(Math.max(...arr)); // 450.
