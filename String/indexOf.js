/**
 * @param searchString - строка яку потрібно шукати.
 * @param fromIndex - індех з якого починати пошук.
 * return index or -1 or str.length.
 */
// str.indexOf(searchString, [fromIndex])

console.log('Hello word'.indexOf('w')); // 6
console.log('Hello word'.indexOf('word')); // 6 індекс першого співпадіння!!!
console.log('Hello word'.indexOf('W')); // -1

console.log('Hello word'.indexOf('w', 6)); // 6
console.log('Hello word'.indexOf('w', 8)); // -1
console.log('Hello word'.indexOf('w', -2)); // 6 коли менше 0 починає з початку.


console.log('Hello word'.indexOf('')); // 0 - пуста стрічка повертає індекс першого входження!!!
console.log('Hello word'.indexOf('', 5)); // 5 - пуста стрічка повертає індекс першого входження!!!
console.log('Hello word'.indexOf('', 50)); // 10 - якщо індекс більший за довжину стрічки то повертає довжину стрічки.



console.log('Hello word 10!'.indexOf(1)); // 11
console.log('Hello word 10!'.indexOf(0)); // 12
console.log('Hello word 10!'.indexOf(null)); // -1
console.log('Hello word 10!'.indexOf(true)); // -1
console.log('Hello word 10!'.indexOf(false)); // -1
console.log('Hello word 10!'.indexOf(undefined)); // -1
