// valueOf() - повертає примітив обєкта Number() (number, NaN, Infinity)

// let num1 = new Number(10);
// console.log(num1.valueOf()); // 10
// console.log(typeof num1.valueOf()); // number
//
// let num2 = new Number('20');
// console.log(num2.valueOf()); // 20
// console.log(typeof num2.valueOf()); // number
//
// let num3 = new Number(null);
// console.log(num3.valueOf()); // 0
// console.log(typeof num3.valueOf()); // number

// let num4 = new Number(true);
// console.log(num4.valueOf()); // 1
// console.log(typeof num4.valueOf()); // number
//
// let num5 = new Number(false);
// console.log(num5.valueOf()); // 0
// console.log(typeof num5.valueOf()); // number
//
// let num6 = new Number(undefined);
// console.log(num6.valueOf()); // NaN
// console.log(typeof num6.valueOf()); // number

// let num6 = new Number(Infinity);
// console.log(num6.valueOf()); // Infinity
// console.log(typeof num6.valueOf()); // number

// let num7 = new Number('Infinity');
// console.log(num7.valueOf()); // Infinity
// console.log(typeof num7.valueOf()); // number

// let num8 = new Number('null');
// console.log(num8.valueOf()); // NaN
// console.log(typeof num8.valueOf()); // number

let num9 = new Number('hnhjnhn');
console.log(num9.valueOf()); // NaN
console.log(typeof num9.valueOf()); // number
