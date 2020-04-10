// Number.isInteger - перевіряє чи передане значення є цілим числом і повертає true або false.
console.log(Number.isInteger(5));  // true
console.log(Number.isInteger(5.0));// true
console.log(Number.isInteger(-5)); // true
console.log(Number.isInteger(0));  // true
console.log(Number.isInteger(-0)); // true
console.log(Number.isInteger(5.5));// false
console.log(Number.isInteger('5'));// false
console.log(Number.isInteger('5.89')); // false
console.log(Number.isInteger(null));   // false
console.log(Number.isInteger(undefined));  // false
console.log(Number.isInteger(true));   // false
console.log(Number.isInteger(false));  // false
