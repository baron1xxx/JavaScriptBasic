// parseFloat - конвертує в стрічку і повертає десятковий дріб або ціле число.
// Конвертує в стрічку, а потів стрічку в число до того моменту поки можна це зробити.
// parseFloat(' 9.89nhnhn') // 9.89 пробіл не врахується і поверне 9.89.
// parseFloat('8.89nhnhn') // поверне 8.89.
console.log(parseFloat(1/3));  // 0.3333333333333333
console.log(parseFloat(2.05));// 2.05
console.log(parseFloat(-3.58)); // -3.58
console.log(parseFloat(0));  // 0
console.log(parseFloat(-0)); // 0
console.log(parseFloat(4.5));// 4.5
console.log(parseFloat('5'));// 5
console.log(parseFloat('6.89')); // 6.89
console.log(parseFloat('7mhjmj,mhjmb')); // 7
console.log(parseFloat('8.89nhnhn')); // 8.89
console.log(parseFloat(' 9.89nhnhn')); // 9.89 пробіл не врахується і поверне число.
console.log(parseFloat('n10')); // NaN
console.log(parseFloat(NaN)); // NaN
console.log(parseFloat(null));   // NaN
console.log(parseFloat(undefined));  // NaN
console.log(parseFloat(true));   // NaN
console.log(parseFloat(false));  // NaN
console.log(parseFloat(Infinity)); // Infinity
