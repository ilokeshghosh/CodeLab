import React from 'react'

interface User {
    name: string,
    age: number,
    address: {
        city: string,
        state: string,
        country: string
    }
}

interface CardProps {
    username?: string,
    obj: User
}
function Card({ username='sample user name', obj }: CardProps) {
    return (
        <div className="flex flex-col border border-slate-400 rounded-xl my-4 p-4  gap-4 justify-center items-center">

            <img
                src='../src/assets/react.svg'
                alt=''
            />

            <h1 className="text-2xl  p-3 rounded">Card for phots</h1>
            <h2>{username}</h2>
        </div>
    )
}

export default Card