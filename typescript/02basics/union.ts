let score: string | number = 33

score = '44'

type User = {
    name: string;
    id: number
}

type Admin = {
    username: string;
    id: number
}

let user: User | Admin = { name: 'lokesh', id: 233 };
user = { username: 'ghosh', id: 2323 };

// function getDbId(id: number | string) {
//     console.log(`DB Id is : ${id}`);
// }

getDbId(3)
getDbId('3')


function getDbId(id: number | string) {
    if (typeof id === 'string') {
        id.toLowerCase();
    }
}


// const data: number[] | string[] = [1, 2, 3];
const data: (number | string)[] = [1, 2, 3,'u'];


let seatAllotment: 'aisle' | 'middle' | 'window' = 'middle';
seatAllotment = 'aisle'
// seatAllotment='crew' //throw error

export {}