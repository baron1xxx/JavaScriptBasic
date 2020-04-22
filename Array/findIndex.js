/**
 * Повертаэ index першого елемента масива яке задовільняэ умову у callback або -1, якщо умова не виконана.
 *@param callback (
 * element - елемент масиву під час ітераціїб
 *  index - індекс масиву під час ітераціїб
 *  array - сам масив) - перевіряє чи хочаб один елемент масиву відповідає заданій умові.
 *@param thisArg - значення яке буде використовуватись як this у callback.
 *  return index.
 */

// arr.findIndex(callback(element, index, array),thisArg)

const array = [1, 2,'Hello', 3,'5', {name: 'Roman'}, 'Hello' ];

const filterArray = array.findIndex(function (el, index, array) {
if (el === 'Hello') {
    console.log('index - ', index); // 2 - індех першого елемента, який задовільнив умову.
}
    console.log('element - ', el);
    return el === 'Hello'
});
console.log(filterArray); // 'Hello'

