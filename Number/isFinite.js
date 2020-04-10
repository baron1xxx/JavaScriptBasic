
Number('123');     // 123
Number('12.3');    // 12.3
Number('12.00');   // 12
Number('123e-1');  // 12.3
Number('');        // 0
Number(null);      // 0
Number(undefined);  // NaN
Number('0x11');    // 17
Number('0b11');    // 3
Number('0o11');    // 9
Number('foo');     // NaN
Number('100a');    // NaN
Number('-Infinity'); //-Infinity

// isFinite - визивається глобально, тому спочатку перетворює значення в число і перевіряє чи воно є звичайним числом (НЕ NaN. +- Infinity)

console.log(Number('str')); // NaN
console.log(Number('25hjhj')); // NaN
console.log(Number(undefined)); // NaN
console.log(Number(Infinity)); // Infinity
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log('!!!!!!!!!!!!! isFinite GLOBAL!!!!!!!!!!!!!');

console.log(isFinite('str')); //false бо NaN
console.log(isFinite('25hjhj')); //false бо NaN
console.log(isFinite(undefined)); //false бо NaN
console.log(isFinite(Infinity)); // false Infinity
console.log(isFinite('25')); //  true бо 25
console.log(isFinite('')); // true бо 0
console.log(isFinite(null)); //true бо 0
console.log(isFinite(true)); //true бо 0
console.log(isFinite(false)); //true бо 0


//Number.isFinite - не виконує обовязкове перетворення до числа тому тільки звичайні числа будуть числами (true)
console.log('!!!!!!!!!!!!! Number.isFinite !!!!!!!!!!!!!');

console.log(Number.isFinite('str')); //false
console.log(Number.isFinite('25hjhj')); //false
console.log(Number.isFinite(undefined)); //false
console.log(Number.isFinite(Infinity)); // false
console.log(Number.isFinite('')); // false
console.log(Number.isFinite(null)); //false
console.log(Number.isFinite('25')); //false
console.log(Number.isFinite(25)); // true
console.log(Number.isFinite(25.58)); //  true


// console.log(Number.isInteger(5));
// console.log(Number.isInteger(5));
// console.log(Number.isInteger(5));
// console.log(Number.isInteger(5));
// console.log(Number.isInteger(5));
// console.log(Number.isInteger(5));
// console.log(Number.isInteger(5));
