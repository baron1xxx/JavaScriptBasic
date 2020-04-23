/**
 * иконує ітерацію по масиву.
 *@param callback (
 *  element - елемент масиву під час ітераціїб
 *  index - індекс масиву під час ітераціїб
 *  array - сам масив) - перевіряє чи хочаб один елемент масиву відповідає заданій умові.
 *@param thisArg - значення яке буде використовуватись як this у callback.
 *  return undefined ЗАВЖДИ!!!.
 */

// arr.forEach(callback(currentValue, index, array), thisArg);


const array = [1, 2,'Hello', 3,'5', {name: 'Roman'}, 'Hello' ];

array.forEach(function(el, index, arr) {
    console.log(el);
    console.log(index);
    console.log(arr);
    console.log(this.message);

}, {message: 'It is thisArg'});


const words = ['перший', 'другий', 'третій', 'четвертий'];

words.forEach(function(word, index) {
    console.log(word);
    console.log(index);
    if (word === 'другий') {
        words.shift();
    }
});
// Довжина масиву вираховується до запуску функції callback, ТОМУ --- !!!
// перший - el[0]
// 0 - index
// другий - el[1]
// 1  - index
// Тут видаляється 'перший', масив стає довжиною 3 а елементи зміщаються в ліво.
// четвертий - el[2] - бо він тепер під індексом 2
// 2 - index


const words2 = ['перший', 'другий', 'третій', 'четвертий'];

words2.forEach(function(word, index) {
    console.log(word);
    console.log(index);
    if (word === 'другий') {
        words2.push('пятий');
    }
});


// перший
// 0
// другий
// 1
// третій
// 2
// четвертий
// 3
// Розмій масиву порахований до того як виконується функція callback, ТОМУ --- !!!
// коли вставляється елемент в кінець масиву його індекс не враховується під час ітерації.
