"use strict";
// class User {
//     public email: string;
//     private name: string
//     private readonly city: string = 'kolkata'
//     constructor(email: string, name: string) {
//         this.email = email;
//         this.name = name
//     }
// }
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        // private _courseCount = 1;
        this._courseCount = 1;
        this.city = 'kolkata';
    }
    deleteToken() {
        console.log('this is delete token');
    }
    get getAppleEmail() {
        return `apple@${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error('Course should be more than 1');
        }
        this._courseCount = courseNum;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const lokesh = new User('ghosh@lokesh.com', 'Lokesh Ghosh');
// lokesh.city = ''
