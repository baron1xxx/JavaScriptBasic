// Math.random() - Псевдовипадкове число із рухомою комою між 0 (включно) та 1 (виключно).

// console.log(Math.random());

/**
 * Повертає випадкове значення між двома вказаними не включаючи max.
 * @param min
 * @param max
 * @returns {*}
 */
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
console.log(getRandomArbitrary(1, 10)); // 1,000000000000000 ... 9,99999999999999

/**
 * Повертає випадкове ціле значення між двома вказаними не включаючи max.
 * @param min
 * @param max
 * @returns {number}
 */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Включно з мінімальним та виключаючи максимальне значення.
}
console.log(getRandomInt(1, 10));// 1...9
/**
 * Повертає випадкове ціле значення між двома вказаними включаючи max.
 * @param min
 * @param max
 * @returns {number}
 */
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Включаючи мінімум та максимум.
}
console.log(getRandomIntInclusive(1, 10));// 1...10
