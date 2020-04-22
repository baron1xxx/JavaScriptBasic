/**
 * Повертаэ перше значення елемента масива яке задовільняэ умову у callback або undefined, якщо умова не виконана.
 *@param callback (
 * element - елемент масиву під час ітераціїб
 *  index - індекс масиву під час ітераціїб
 *  array - сам масив) - перевіряє чи хочаб один елемент масиву відповідає заданій умові.
 *@param thisArg - значення яке буде використовуватись як this у callback.
 *  return value.
 */

// arr.find(callback(element, index, array),thisArg)

const array = [1, 2,'Hello', 3,'5', {name: 'Roman'}, 'Hello' ];

const filterArray = array.find(function (el, index, array) {
if (el === 'Hello') {
    console.log(index); // 2 - індех першого елемента, який задовільнив умову.
    return el
}
    console.log(el); //
});
console.log(filterArray); // 'Hello'

