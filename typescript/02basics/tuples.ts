// const user: (string | number)[] = ['lokesh', 1];
let user: [string, number, boolean]

// user = [3, "lokesh", true]  //throw error
user = ['lokesh', 3, true]

let rgb: [number, number, number] = [234, 232, 255]


type User = [number, string]

const newUser: User = [112, "test@user.com"]

newUser[1] = 'lokesh@example.com'
newUser[0] = 322
// newUser.push(false);