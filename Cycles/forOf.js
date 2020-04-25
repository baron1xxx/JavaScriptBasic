class Credentials {
    constructor(login, password) {
        this.login = login
        this.password = password
    }

}

class RegisterData extends Credentials{

    constructor(login, password, firstName, lastName) {
        super(login, password);
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

class UserData extends RegisterData{

    constructor(login, password, firstName, lastName, tel, avatar) {
        super(login, password, firstName, lastName);
        this.tel = tel;
        this.avatar = avatar;
    }
}

const user = new UserData('baron', 1234567890, 'Rom', 'Myk', 970000000, 'avatar');
// console.log(user);

// Об'єкт не ітерабельний об'єкт. Тут буде помилка!!!
// for (let key of user) {
//     console.log(key);
// }

const entriesUser = Object.entries(user);

for (let key of entriesUser) {
    console.log(key);
}

const fromEntriesUser = Object.fromEntries(entriesUser);
fromEntriesUser.login = 'lapulja';
console.log(fromEntriesUser);
console.log(user);


//
// const array = [1, 2, 3, 'Hello'];
//
// for (let key in array) {
//     console.log(key);
// }
