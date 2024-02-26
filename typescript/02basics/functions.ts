function addTwo(num: number): number {
    return num + 2;
    // return 'hello'
}


function getUpper(val: string) {
    return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) { }


let loginUser = (name: string, email: string, isPaid: boolean = false) => { }

addTwo(7);
getUpper('lokesh');
signUpUser('lokesh', 'ghoshlokesh@gmail.com', false);
loginUser('lokesh', 'lokesh@gmail.com')



const getHello = (s: string): string => {
    return ''
}

const heros = ['thor', 'batman', 'hulk']
// const heros = [1,2,3]

heros.map((hero): string => {
    return `hero is ${hero}`;
    // return 2
})


function consoleError(errMsg: string): void {
    console.log(errMsg);
}

function handleError(errMsg:string):never{
    throw new Error(errMsg)
}

export { }