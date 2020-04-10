// parseInt - конвертує в стрічку і повертає ціле число.
// Конвертує в стрічку, а потім стрічку в число до того моменту поки можна це зробити.
// parseInt(' 9.89nhnhn') // 9 на початку пробіл не врахується  і поверне 9.
// parseInt('7mhjmj,mhjmb') // поверне 7.
console.log(parseInt(1));  // 1
console.log(parseInt(2.0));// 2
console.log(parseInt(-3)); // -3
console.log(parseInt(0));  // 0
console.log(parseInt(-0)); // 0
console.log(parseInt(4.5));// 4
console.log(parseInt('5'));// 5
console.log(parseInt('6.89')); // 6
console.log(parseInt('7 5mhjmj,mhjmb')); // 7
console.log(parseInt('8.89nhnhn')); // 8
console.log(parseInt(' 9.89nhnhn')); // 9 пробіл не врахується і поверне число.
console.log(parseInt('n10')); // NaN
console.log(parseInt(Infinity)); // NaN
console.log(parseInt(NaN)); // NaN
console.log(parseInt(null));   // NaN
console.log(parseInt(undefined));  // NaN
console.log(parseInt(true));   // NaN
console.log(parseInt(false));  // NaN
