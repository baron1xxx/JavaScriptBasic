/**
 * Створює новий об'єкт, використовуючи існуючий як прототип
 * @param proto - об'єкт який буде прототипом
 * @param propertiesObject - поля з об'єктом який визначає властивості поля!!!
 *      {
 *          value:                          - значення поля
 *          enumerable: false or true       - чи буде видно під час ітерації
 *          writable: false or true         - можна чи не можна змінувати value
 *          configurable: false or true     - можна чи не можна видаляти value
 *          get() {
 *              return value
 *          }:                              - функція гетер
 *          set(value) {
 *              this.value = value
 *          }:                              - функція сетер
 *
 *      }
 * return new Obj - з вказаним прототипом та властивостями
 */

// Object.create(proto, propertiesObject)

const obj = Object.create({}, {
    name: {
        value: 'Roman',
        enumerable: true,
        writable: false,
        configurable: true
    }
});
console.log(obj);

obj.name = 'Ivan';
console.log(obj); // { name: 'Roman' } бо writable: false
delete obj.name;

console.log(obj); // {} бо configurable: true


