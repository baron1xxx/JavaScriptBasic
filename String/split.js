/**
 * Розбиває стрічку на масив по заданих символах.
 * @param separator. Символи по яких буде розбиватися строка на масив. Може бути срокою або регулярним виразом.
 *                  Ящо не вказано то буде масив з одним елементом всієї строки.
 *                  Якщо вказана пуста строка то сроку розибє на масив символів.
 * @param limit<Integer>. Межа на кількість знайдених підстрок (розмір масиву).
 */
// str.split(separator, limit)

// console.log('Hello word'.split()); // ['Hello word']
// console.log('Hello word'.split(' ')); // ['Hello', 'word']
// console.log('Hello word'.split('')); // ['H', 'e', 'l', 'l','o', ' ', 'w', 'o','r', 'd']
// console.log('Hello word'.split('', 5)); // ['H', 'e', 'l', 'l','o']
// console.log('Hello word'.split('', 0)); // []
// console.log('Hello word'.split('', -1)); // ['H', 'e', 'l', 'l','o', ' ', 'w', 'o','r', 'd']
// console.log('Hello word'.split('', 15)); // ['H', 'e', 'l', 'l','o', ' ', 'w', 'o','r', 'd']



// console.log('Hello word'.split('', true)); // ['H']
// console.log('Hello word'.split('', false)); // []
// console.log('Hello word'.split('', null)); // []
// console.log('Hello word'.split('', undefined)); // ['H', 'e', 'l', 'l','o', ' ', 'w', 'o','r', 'd']
// console.log('Hello word'.split('', Infinity)); // []


console.log('H1el2lo3wor9d'.split(/[0-9]/)); // [ 'H', 'el', 'lo', 'wor', 'd' ]
console.log('Hello word WORD'.split(/[o]/)); // [ 'Hell', ' w', 'rd WORD' ]
console.log('Hello word WORD'.split(/[o]/i)); // [ 'Hell', ' w', 'rd W', 'RD' ] i - ignore register!!!
