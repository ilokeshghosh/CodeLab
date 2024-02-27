const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
    return val;
}

function identityTwo(val: any): any {
    return val;
}

function identityThree<Type>(val: Type): Type {
    return val
}

identityThree(2)

function identityFour<T>(val: T): T {
    return val
}

interface Bootle {
    brand: string,
    type: number
}

identityFour<Bootle>({ brand: 'milton', type: 23 });


function getSearchProducts<T>(products: T[]): T // since we are using array of T (i.e T[]) so output should be one of the item from the array(i.e T)
{

    //do some calculation
    const myIndex = 3 //output of the operation
    return products[myIndex]
}

const getMoreProducts = <T,>(products: T[]): T => {
    //do some calculation

    const index = 2 //output of the operation

    return products[index]
}


interface Database {
    connection: string,
    username: string,
    password: string
}
function anotherFunction<T, U extends Database>(val1: T, val2: U): object {
    return {
        val1,
        val2
    }
}

// anotherFunction(12, "a");
// anotherFunction('asdf', 23);
// anotherFunction(12, { connection: 'asd', username: 'asdf', password: 'asdf' })

interface Quiz {
    name: string,
    type: string,


}

interface Course {
    name: string,
    author: string,
    subject: string
}


class Sellable<T>{
    public cart: T[] = []

    addToCart(product: T) {
        this.cart.push(product);
    }
}


