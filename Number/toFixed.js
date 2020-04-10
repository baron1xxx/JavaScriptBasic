// toFixed - форматує число в число з фіксованою точкою.
console.log(1..toFixed());  // 1
console.log((1).toFixed());  // 1
console.log((1).toFixed(2));  // 1.00
console.log((+'5').toFixed(4));  // 5.0000
console.log((+' 5gb').toFixed(4));  // NaN
console.log((+true).toFixed(4));  // 1.0000
console.log((+false).toFixed(4));  // 0.0000
console.log((NaN).toFixed(4));  // NaN
console.log((Infinity).toFixed(4));  // Infinity
console.log(1.3333333333.toFixed(2));  // 1.33
console.log(1.3333333333.toFixed(2));  // 1.33
console.log(1.3333333333.toFixed(5));  // 1.33333
console.log(1.25555.toFixed(3));  // 1.256 заокруглює
console.log(1.25544.toFixed(3));  // 1.255 заокруглює

