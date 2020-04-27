
const obj = Object.create({age: 30}, {
    name: {
        value: 'Roman',
        enumerable: true,
        writable: false,
        configurable: true
    }
});

console.log(obj); // { name: 'Roman' }
// {age: 30} - це поле об'єкта прототипа!!! В самому об'єкті нема такої властивості АЛЕ ВОНА НАСЛІДУЄТЬСЯ З ПРОТОТИПА!!!
console.log(obj.age); // 30.
for (let key in obj) { // Проходиить по власним властивостяє і по властивостям прототипа.
    console.log(key);
    /*
    name
    age
     */
}



const array = [1, 2, 3, 'Hello'];

for (let key in array) {
    console.log(key); // По індексам.
/*
    0
    1
    2
    3
*/
}



//
//
// class Credentials {
//     constructor(login, password) {
//         this.login = login
//         this.password = password
//     }
//
// }
//
// class RegisterData extends Credentials {
//
//     constructor(login, password, firstName, lastName) {
//         super(login, password);
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
// }
//
// class UserData extends RegisterData {
//
//     constructor(login, password, firstName, lastName, tel, avatar) {
//         super(login, password, firstName, lastName);
//         this.tel = tel;
//         this.avatar = avatar;
//     }
// }
//
// const user = new UserData('baron', 1234567890, 'Rom', 'Myk', 970000000, 'avatar');
//
// console.log(user);
// /*
// UserData {
//   login: 'baron',
//   password: 1234567890,
//   firstName: 'Rom',
//   lastName: 'Myk',
//   tel: 970000000,
//   avatar: 'avatar'
// }
//  */
//
// for (let key in user) {
//     console.log(key);
//     /*
//     login
//     password
//     firstName
//     lastName
//     tel
//     avatar
//      */
// }

