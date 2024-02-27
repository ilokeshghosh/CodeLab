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
    // private _courseCount = 1;
    protected _courseCount = 1;

    private readonly city: string = 'kolkata'
    constructor(public email: string, public name: string) {

    }

    private deleteToken() {
        console.log('this is delete token')
    }

    get getAppleEmail(): string {
        return `apple@${this.email}`
    }

    get courseCount(): number {
        return this._courseCount;
    }

    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error('Course should be more than 1')
        }
        this._courseCount = courseNum;
    }
}


class SubUser extends User {
    isFamily: boolean = true
    changeCourseCount() {
        this._courseCount = 4
    }
}

const lokesh = new User('ghosh@lokesh.com', 'Lokesh Ghosh');
// lokesh.city = ''


export{}