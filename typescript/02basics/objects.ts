// const User={
//     name:'lokesh',
//     email:'lokesh@gmail.com',
//     isActive:true
// }

// function createUser({ name: string, isPaid: boolean }) { }

// createUser({name:'lokesh',isPaid:false});

// const newUser = { name: 'lokesh', isPaid: true, email: 'lokesh@gmail.com' }
// createUser(newUser) //suppose to throw error (bad behavior)

// createUser({name:'lokesh',isPaid:true,email:'lokesh@gmail.com'}) // will throw error


// function createCourse():{name:string,price:number}{
//     return{name:'fullstack',price:300}
// }

// type User = {
//     name: string;
//     email: string,
//     isActive: boolean
// }

// function createUser(user: User): User {
//     return user;
// }

// createUser({ name: 'lokesh', email: '', isActive: false })
// export { }



type User = {
    // readonly _id: string,
    readonly _id: string[],
    name: string,
    email: string,
    isActive: boolean,
    creditCardDetails?: number
}

let myUser: User = {
    // _id: '1234',
    _id: ['1234'],
    name: 'h',
    email: "",
    isActive: true
}

type cardNumber = {
    cardnumber: string
}
type cardDate = {
    cardDate: string
}
type cardDetails = cardDate & cardNumber & {
    cvv: string
}

myUser.email = 'test@f.aom'

// myUser._id  ='asdf'
myUser._id.push('asdf')

console.log('myUser', myUser);