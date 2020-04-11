// Math.ceil - повертає число заукруглене до більшого цілог.

console.log(Math.ceil(5.1)); // 6
console.log(Math.ceil(-5.7)); // -5 бо -5 > -6
console.log(Math.ceil(-0.1)); // -0
console.log(Math.ceil(0)); // 0
console.log(Math.ceil(0.1)); // 1
console.log(Math.ceil(0.0001)); // 1
console.log(Math.ceil('0.005')); // 1
console.log(Math.ceil('-100.5')); // -100 бо -100 > -101
console.log(Math.ceil(true)); // 1
console.log(Math.ceil(false)); // 0
console.log(Math.ceil(null)); // 0
console.log(Math.ceil(undefined)); // NaN
console.log(Math.ceil(Infinity )); // Infinity
