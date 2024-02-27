function detectTypes(val: number | string) {
    if (typeof val === 'string') {
        return val.toLowerCase();
    }


    return val + 3
}

function provideId(id: string | null) {
    if (!id) {
        console.log('Please Provide ID');
        return
    }

    id.toLowerCase();
}

interface User {
    name: string,
    email: string
}

interface Admin {
    name: string,
    email: string,
    isAdmin: boolean
}

function isAccountAdmin(account: User | Admin) {
    if ('isAdmin' in account) {
        return account.isAdmin
    }
}

function logValue(x: Date | string) {
    if (x instanceof Date) {
        console.log(x.toUTCString())
    } else {
        console.log(x.toUpperCase());
    }
}

type Fish = { swim: () => void }
type Bird = { fly: () => void }

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined
}


function getFood(pet: Fish | Bird) {
    if (isFish(pet)) {
        pet
        return 'Fish Food'
    } else {
        pet
        return 'Bird Food'
    }
}


// discriminated unions
interface Circle {
    kind: 'circle'
    radius: number
}

interface Square {
    kind: 'square'
    side: number
}

interface Rectangle {
    kind: 'rectangle',
    length: number,
    width: number,
}

type Shape = Circle | Square | Rectangle

function getTrueShape(shape: Shape) {
    if (shape.kind === 'circle') {
        shape
        return Math.PI * shape.radius
    }
    // return shape.side * shape.side
}


// never type exhaustiveness checking
function getArea(shape: Shape) {
    switch (shape.kind) {
        case 'circle':
            return Math.PI * shape.radius ** 2
        case 'square':
            return shape.side * shape.side
        case 'rectangle':
            return shape.length * shape.width
        default:
            const _defaultShape: never = shape;
            return _defaultShape
    }
}