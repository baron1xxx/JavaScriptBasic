
// Замінює при першому входженні
console.log('Hello word Hello'.replace('Hello', 'Hay')); // Hay word Hello

// Замінює при першому входженні
console.log('Hello word Hello'.replace(/Hello/, 'Hay'));// Hay word Hello

// Замінює всі вказавши 'g' - global. Не врахує регістр.
console.log('Hello word Hello'.replace(/Hello/g, 'Hay'));// Hay word Hay
console.log('Hello word hello'.replace(/Hello/g, 'Hay'));// Hay word hello

// Замінює всі не враховуючи регістр вказавши 'gi' 'i' - ігнорувати регістр.
console.log('Hello word Hello'.replace(/Hello/gi, 'Hay'));// Hay word Hay

// !!!!!!!!!!!!!!!! Використання функції !!!!!!!!!!!!!!!!!!
// Функція визивається на кожному співпадінні.
console.log('Hello word Hello'.replace(/Hello/gi, (searchValue, index, str) => {
    console.log(searchValue); // 1-Hello   2-Hello
    console.log(index); // 1- 0   2- 11
    console.log(str); // 1- Hello word Hello  2- Hello word Hello.
    return 0;
})); // 0 word 0
