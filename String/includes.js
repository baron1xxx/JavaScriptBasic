/**
 * @param searchString - підстрока яку потрібно шукати
 * @param position - індех з якого починати пошук.
 * return true or false.
 */
// str.includes(searchString[, position])

console.log('Hello word'.includes('word')); // true
console.log('Hello word'.includes('WORD')); // false

console.log('Hello word'.includes('')); // true
console.log('Hello word'.includes('w', 1)); // true
console.log('Hello word'.includes('w', 10)); // false
console.log('Hello word'.includes('w', 1000)); // false
console.log('Hello word'.includes('', 1000)); // true


console.log('Hello word'.includes('Hello w')); // true
console.log('Hello word'.includes('Hello' + ' ' + 'w')); // true
