/**
 * Визивається на глобальному об'єкті Array
 * Створює нову ПОВЕРХНЕВУ(примітиви копіює значення А ОБ'ЄКТИ ПО ПОСИЛАННЮ) копію масиву з масиву або подібних до масиву об'єктів (ітеруємих)
 * @arrayLike масив або масивоподібні (ті що мають length, ітеруємі) об'єктию
 * @mapFn (value - елемент масива, index - індекс елемента масива)
 * return Array
 */

// Array.from(arrayLike, mapFn[, thisArg])
const array = [1, 2, 3,'5', {name: 'Roman'}, 'Hello' ];
const arrayLike = Array.from(array);
console.log('arrayLike - ', arrayLike);// arrayLike -  [ 1, 2, 3, '5', { name: 'Roman' }, 'Hello' ]

// Міняємо значення елементів масива
arrayLike[4].name = 'Ivan'; // міняємо об'єкт
arrayLike[0] = 111;// міняємо примітив
arrayLike[5] = 'Word';// міняємо примітив
console.log('arrayLike - ', arrayLike); // arrayLike -  [ 111, 2, 3, '5', { name: 'Ivan' }, 'Word' ]


 // В новому масиві міститься не об'єкт а силка на ньго тому змінивши значення поля імя ми міняємо значення в початковому масиві!!!
console.log(array); // [ 1, 2, 3, '5', { name: 'Ivan' }, 'Hello' ]

console.log('----------------------------------------------------------');

const fromArray = Array.from(array, (value, index) => {
    console.log(value);
    console.log(index);
    console.log('***************');
    return value * 25
});
console.log(fromArray); // [ 25, 50, 75, 125, NaN, NaN ]
