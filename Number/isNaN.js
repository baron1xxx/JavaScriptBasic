let num1 = new Number('158');
let num2 = Number(158);
//
// console.log(num1); // [Number: 158]
// console.log(typeof num1); // object
// console.log(num2);// 158
// console.log(typeof num2); // number
// console.log('**************');
// console.log(num1 instanceof Number) // true
// console.log(num2 instanceof Number); // false
// console.log('**************');
// console.log(num1 === num2); // false

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

// isNaN - визивається глобально тому спочатку перетворює значення в число (приводить то типу) і перевіряє чи воно isNaN.
console.log('!!!!!!!!!!!!! isNaN GLOBAL!!!!!!!!!!!!!');

console.log(Number(''));
console.log(Number(null));
console.log(Number(true));
console.log(Number(false));
console.log(Number('25'));
console.log(Number('25'));
console.log(Number(50));


console.log(isNaN('5jgbnn')); //true
console.log(isNaN('25hjhj')); //true
console.log(isNaN(undefined)); //true
console.log(isNaN(Infinity)); // false бо Infinity
console.log(isNaN('25')); //  false бо 25
console.log(isNaN('')); // false бо 0
console.log(isNaN(null)); // false бо 0
console.log(isNaN(true)); // false бо 1
console.log(isNaN(false)); // false бо 0
console.log(isNaN(50)); // false бо 50
console.log(isNaN(50.52)); // false бо 50.52

// Number.isNaN - не виконує обовязкове перетворення до числа тому тільки Number.isNaN(NaN) true.
console.log('!!!!!!!!!!!!! Number.isNaN !!!!!!!!!!!!!');

console.log(Number.isNaN('5jgbnn')); //false
console.log(Number.isNaN('25hjhj')); //false
console.log(Number.isNaN(undefined)); //false
console.log(Number.isNaN(Infinity)); // false
console.log(Number.isNaN('25')); //  false
console.log(Number.isNaN('')); // false
console.log(Number.isNaN(null)); // false
console.log(Number.isNaN(50)); // false
console.log(Number.isNaN(NaN)); // true
