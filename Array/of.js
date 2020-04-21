/**
 * Створює масив з любої кількості переданих аргументів та незалежно від їх типу
 *@param elementN
 * return array
 */
// Array.of(element0, element1, ..., elementN)


const  ofArray = Array.of(2, 3, '10', 'Hello', {name: 'Ivan'}, [2, 8, 'word'], function (a, b) { return a+b});
console.log(ofArray); // [ 2, 3, '10', 'Hello', { name: 'Ivan' }, [ 2, 8, 'word' ], [Function] ]
