/**
 * @param count (кількість повторень)
 * return нову строку повторену відповідну кількість разів.
 */
// str.repeat(count)

console.log('Hello'.repeat(1)); // 'Hello'
console.log('Hello'.repeat()); // ''
console.log('Hello'.repeat(0)); // ''
console.log('Hello'.repeat(3)); // 'HelloHelloHello'
console.log('Hello'.repeat(3.3)); // 'HelloHelloHello'

console.log('Hello'.repeat('0')); // ''
console.log('Hello'.repeat('3')); // 'HelloHelloHello'
console.log('Hello'.repeat('3.3')); // 'HelloHelloHello'
console.log('Hello'.repeat(3.6)); // 'HelloHelloHello'

console.log('Hello'.repeat(true)); // 'Hello'
console.log('Hello'.repeat(false)); // ''
console.log('Hello'.repeat(null)); // ''


// console.log('Hello'.repeat(Infinity)); // Error
// console.log('Hello'.repeat(-4)); // Error
// console.log('Hello'.repeat(1/0)); // Error
