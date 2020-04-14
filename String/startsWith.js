/**
 * Перевіряє чи починається строка символами другої строки.
 * @param searchString. Символи які будуть шукатися в початковій строці.
 * @param position. Позиція з якох починати пошук.
 * return boolean
 */
const str = 'Быть или не быть, вот в чём вопрос.';

console.log(str.startsWith('Быть'));        // true
console.log(str.startsWith('не быть'));     // false
console.log(str.startsWith('не быть', 9));  // true
