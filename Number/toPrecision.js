// toPrecision() - повертає 'string' до вказаної точності (значущих цифр (не 0)).
let numObj = 5.123456;

console.log(typeof numObj.toPrecision());    // 'string'
console.log(numObj.toPrecision());    // '5.123456'
console.log(numObj.toPrecision(5));   // '5.1235'
console.log(numObj.toPrecision(2));   // '5.1'
console.log(numObj.toPrecision(1));   // '5'

numObj = 0.000123000;

console.log(numObj.toPrecision());    //'0.000123' виводить до цифр які значущі (1,25 = 1,25000 бо 000 - не значущі)
console.log(numObj.toPrecision(9));   //'0.000123000000' тобто 0,000(123000000 - кількість значущих цифр)
console.log(numObj.toPrecision(2));   //'0.00012'
console.log(numObj.toPrecision(1));   //'0.0001'

// Обратите внимание, что если заданного количества разрядов
// недостаточно для точного отображения целой части числа,
// значение может быть возвращено в экспоненциальной записи.
console.log((1234.5).toPrecision(2)); // выведет '1.2e+3'
