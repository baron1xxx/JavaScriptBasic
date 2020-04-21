/**
 * @param valueN - масив або значення які потрібно об'єднати.
 * return array ПОВЕРХНЕВА КОПІЯ!!!
 */
// old_array.concat(value1, value2, ..., valueN)
    let array = [1, 2, 'a', {name: 'Roman'}];

let newArray = array.concat(['b', 'c', 100], 'Hello', 'Word');
console.log(newArray);[ 1, 2, 'a', { name: 'Roman' }, 'b', 'c', 100, 'Hello', 'Word' ]

newArray[2] = 'AAA';
console.log(newArray);// [ 1, 2, 'AAA', { name: 'Roman' }, 'b', 'c', 100, 'Hello', 'Word' ]
console.log(array);// [ 1, 2, 'a', { name: 'Roman' } ]

// !!!!!!!!!!!!!!!!!!!!
newArray[3].name = 'Ivan';
console.log(newArray); // [ 1, 2, 'AAA', { name: 'Ivan' }, 'b', 'c', 100, 'Hello', 'Word' ]
console.log(array); // [ 1, 2, 'a', { name: 'Ivan' } ]
