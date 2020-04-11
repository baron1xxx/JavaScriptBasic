// Math.floor - повертає число заукруглене до меншого цілог.

console.log(Math.floor(5.1)); // 5
console.log(Math.floor(-5.7)); // -6 бо -6 < -5
console.log(Math.floor(-0.1)); // -1
console.log(Math.floor(0)); // 0
console.log(Math.floor(0.1)); // 0
console.log(Math.floor(0.0001)); // 0
console.log(Math.floor('0.005')); // 0
console.log(Math.floor('-100.5')); // -101 бо -101 < -100
console.log(Math.floor(true)); // 1
console.log(Math.floor(false)); // 0
console.log(Math.floor(null)); // 0
console.log(Math.floor(undefined)); // NaN
console.log(Math.floor(Infinity )); // Infinity
