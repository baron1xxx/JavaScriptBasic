/**
 * @param searchString - строка яку потрібно шукати.
 * @param fromIndex - індех з якого починати пошук.Пошук іде з права на ліво (з кінця до початку).
 * return index or -1 or str.length.
 */
// str.lastIndexOf(searchString, fromIndex)

console.log('Hello word.'.lastIndexOf('o')); // 7
console.log('Hello'.lastIndexOf('o')); // 4
console.log('Hello word'.indexOf('W')); // -1

console.log('wo wo wo'.lastIndexOf('wo')); // 6 індекс останнього співпадіння!!!
console.log('wo wo wo'.lastIndexOf('wooo')); // -1

console.log('wo wo wo'.lastIndexOf('w', 5)); // 3 почне з 5 і піде до початку тому 3
console.log('wo wo wo'.lastIndexOf('w', 8)); // 6 починає з останнього індекса бо 8 більше за довжину стрічки
console.log('wo wo wo'.lastIndexOf('w', -2)); // 0 починає з 0 до початку тому 0 (перша 'w').
console.log('Hello wo wo'.lastIndexOf('w', -2)); // -1 бо  починає з 0 до кінця а на нульовому індексі Н а не w тому -1


console.log('Hello word'.lastIndexOf('')); // 0 - пуста стрічка 0!!!
console.log('Hello word'.lastIndexOf('', 5)); // 5 - пуста стрічка повертає індекс першого входження!!!
console.log('Hello word'.lastIndexOf('', 50)); // 10 - якщо індекс більший за довжину стрічки то повертає довжину стрічки.



console.log('Hello word 10!'.lastIndexOf(1)); // 11
console.log('Hello word 10!'.lastIndexOf(0)); // 12
console.log('Hello word 10!'.lastIndexOf(null)); // -1
console.log('Hello word 10!'.lastIndexOf(true)); // -1
console.log('Hello word 10!'.lastIndexOf(false)); // -1
console.log('Hello word 10!'.lastIndexOf(undefined)); // -1
