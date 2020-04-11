// Math.round - заокруглює до цілого значення за правилами математики.

console.log(Math.round(5.19)); // 5
console.log(Math.round(-5.7)); // -6
console.log(Math.round(-0.1)); // -0
console.log(Math.round(0)); // 0
console.log(Math.round(8.456)); // 8
console.log(Math.round(0.0001)); // 0
console.log(Math.round('7.423')); // 7
console.log(Math.round(8.444445)); // 8
console.log(Math.round(8.49)); // 8
console.log(Math.round('8.444445')); // 8
console.log(Math.round('10.623')); // 11
console.log(Math.round(100.5)); // 101
console.log(Math.round('-100.9')); // -101
console.log(Math.round('100.5')); // 101
console.log(Math.round(true)); // 1
console.log(Math.round(false)); // 0
console.log(Math.round(null)); // 0
console.log(Math.round(undefined)); // NaN
console.log(Math.round(Infinity )); // Infinity

console.log('******* !!!!!!!!!!!!!!!!!!!!! **********');

console.log(Math.round('-100.5')); // -100 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
console.log(Math.round(Number('-100.5'))); // -100
console.log(Math.round(Number('100.5'))); // 101

console.log(Math.round(Number('-1.5'))); // -1 !!!!!!!!!!!!!!!!!!!!!!!!!!!!

console.log('******* !!!!!!!!!!!!!!!!!!!!! **********');
const number = Number('-100.5'.toString());
console.log(number);
console.log(Math.fround(number));
console.log(Math.round(number));
