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
console.log(user);

for (let key in user) {
    console.log(key);
}

const array = [1, 2, 3, 'Hello'];

for (let key in array) {
    console.log(key);
}
