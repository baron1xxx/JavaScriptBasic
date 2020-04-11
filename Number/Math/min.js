// Math.min - повертає мінімальне число із поданих на вхід або NaN, яко не може бути перетвореним у число.

console.log(Math.min(1, 5, 9, -1, -10, 0, -12.111)); // -12.111
console.log(Math.min(1, 5, 9, -1, '-10', 0)); // -10
console.log(Math.min(2, false, true, 10)); // 0 'false == 0'
console.log(Math.min(2, null, true, 10)); // 0 'null == 0'
console.log(Math.min(2, null, true, Infinity, -Infinity)); // -Infinity
console.log(Math.min(2, null, true, Infinity, -Infinity, undefined)); // NaN бо undefined.

let arr = [8, 9, '-15', 100];
console.log(Math.min(...arr)); // -15.

arr = [8, 9, '-15', 100, -Infinity];
console.log(Math.min(...arr)); // -Infinity.

arr = [8, 9, '-15'*30, 100];
console.log(Math.min(...arr)); // -450.
