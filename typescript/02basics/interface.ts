interface User {
    readonly dbId: number
    email: string,
    userId: number,
    googleId?: string,
    // startTrial: () => string
    startTrial(): string,
    getCoupon(couponName: string, value: number): number
}

interface User {
    githubToken: string
}

interface Admin extends User {
    role: 'admin' | 'moderator'
}

const lokesh: User = {
    dbId: 232, email: 'lokesh@ghosh.com', userId: 2121,
    githubToken: 'ilokesh',
    startTrial: () => {
        return 'trial started'
    },
    getCoupon: (name: 'test10', off: 23) => {
        return 10
    }
};


const newUser: Admin = {
    dbId: 232, email: 'lokesh@ghosh.com', userId: 2121,
    githubToken: 'ilokesh',
    role: 'moderator',
    startTrial: () => {
        return 'trial started'
    },
    getCoupon: (name: 'test10', off: 23) => {
        return 10
    }
};
lokesh.email = 'l@g.com'

export{}

