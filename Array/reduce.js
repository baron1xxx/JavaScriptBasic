


// arr.reduce(callback, initialValue)

/*
Якщо не вказано початкове значення (initialValue) то acc - першим вказаним значенням, а ітерація почнеться з другого елемента масива!!!
 */
console.log([1, 3, 4, 6, 10].reduce((acc, currentVal, index, arr) => {
console.group('Reducer - ' + index)
    console.log('curentVal - ', currentVal) // 3; 4; 6; 10
    console.log('index - ', index)// 1; 2; 3; 4
    console.log('acc - ', acc)// 1; 4; 8; 14;
    console.log(acc + currentVal)// 4; 8; 14; 24
    return acc + currentVal;
}));

// /*
// Якщо вказано початкове значення (initialValue) то acc = initialValue, а першим елементом ітерації буде перший елемент масива [0]!!!
//  */
console.log([1, 3, 4, 6, 10].reduce((acc, currentVal, index, arr) => {
    console.group('Reducer - ' + index)
    console.log('curentVal - ', currentVal)// 1; 3; 4; 6; 10
    console.log('index - ', index)// 0; 1; 2; 3; 4
    console.log('acc - ', acc)// 0; 1; 4; 8; 14
    console.log(acc + currentVal)// 1; 4; 8; 14; 24
    return acc + currentVal;
}, 0)); // 24

const  profile = {
    firstName: 'Roman',
    lastName: 'Myk',
    age: 33,
    avatar: 'file',
};
/* Спочатку я робив так
const obj = new Obj()
obj.firstName = profile.firstName
................................
obj.avatar = profile.avatar
 */

let newObj = Object.keys(profile).reduce((acc, keyVal, index, arr) => {
    acc[index] = profile[keyVal];
    return acc
}, []);

console.log('******************');
console.log(newObj);
console.log('******************');
