import React, { useState } from 'react'
import { useCounter } from '../provider/Counter'

// const Button: React.FC<{ text: string }> = (props) => {
//     return <button>this is button {props.text}</button>
// }


interface myButtonProps {
    text: string,
    onclick?: () => void
}

interface Car {
    name: string,
    price: number
}
const Button: React.FC<myButtonProps> = (props) => {

    // const { text, onclick = () => alert('default prop onclick') } = props;

    // const [value, setValue] = useState<Car>({ name: 'alto', price: 400000 });

    const context = useCounter();


    return <>
        {/* <h2>Car:{value.name}({value.price})</h2>
        <button onClick={() => setValue({ name: 'nexon', price: 500000 })}>this is button {text}</button> */}
        <div>
            <h1>{context?.value}</h1>
            <button onClick={(e) => context?.setCounter(context?.value + 1)}>increment</button>
        </div>
    </>
}



export default Button