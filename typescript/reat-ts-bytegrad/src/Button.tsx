import React, { useEffect, useRef, useState } from 'react'

// import {type color } from './Type';

// type buttonProps = {
//     style: React.CSSProperties;
// }

// type buttonProps ={
//     borderRadius : Record<string,number>
// }

// type buttonProps = {
//     onFunc: (n: number) => number;
// }

// type buttonProps ={
//     // children:React.ReactNode;
//     children:JSX.Element;
// }


// type buttonProps = React.ComponentPropsWithoutRef<"button"> & {
//     variant?: 'primary' | 'secondary';
// }

type User = {
    name: string,
    age: number
}

// type buttonColor = 'red' | 'blue' | 'green';



// const convertToArray = <T,>(value: T): T[] => {
//     return [value];
// };

// or

function convertToArray<T>(value: T): T[] {
    return [value];
}

convertToArray(4);
convertToArray('he');


type buttonProps<T> = {
    countValue?: T;
    countHistory?: T[];
}


function Button<T>(
    // { type, autoFocus, variant, ...rest }: buttonProps

    // { countValue, countHistory }: buttonProps<T>
) {
    // const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    //     console.log(e);
    // }

    // const [count, setCount] = useState(0);
    // const [text, setText] = useState('hey there');
    // const [isValid, setIsValid] = useState(true);
    // const [user,setUser]  = useState<User | null>(null)

    // const name = user?.name;


    // const ref = useRef<Element>(null);
    // const ref = useRef<HTMLElement>(null);

    // const ref = useRef<HTMLButtonElement>(null);

    // const buttonTextOptions = [
    //     'click me!',
    //     'click me again',
    //     'click me again one more time'
    // ] as const;

    // type User = {
    //     sessionId: number,
    //     name: string
    // }

    // type Guest = Omit<User, 'name'>;


    // useEffect(() => {
    //     const previousButtonColor = localStorage.getItem('buttonColor') as buttonColor;
    // }, [])

    return (
        // <div style={borderRadius}>Button</div>
        // <div onClick={() => onFunc(23)}>Button</div>
        // <div>{children}</div>

        // <button type={type} autoFocus={autoFocus} {...rest}>click button</button>

        // <button onClick={(e) => console.log(e)}></button>
        // <button onClick={handleClick}>click me</button>

        // <button ref={ref}>click me</button>

        // <button>
        //     {buttonTextOptions.map(option => {
        //         return option;
        //     })}
        // </button>

        <button >click me</button>


    )
}

export default Button