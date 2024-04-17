import { useCallback, useEffect, useState, useMemo, MouseEvent, KeyboardEvent } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


interface User {
  id: number,
  username: string
}

type fibFunc = (n: number) => number;

const fib: fibFunc = (n) => {
  if (n < 2) return n
  return fib(n - 1) + fib(n - 2)
}

const myNum: number = 37;

function App() {
  // const [count, setCount] = useState<User | null>(null);
  // const [count, setCount] = useState<User[] | null>(null);
  // const [count, setCount] = useState<User[]>([]);
  const [count, setCount] = useState<number>(0);
  const [users, setUsers] = useState<User[] | null>(null);


  useEffect(() => {
    console.log('Mounting');
    console.log("Users : ", users)

    return () => console.log("Unmounting");
  }, [users])

  const handleClick = useCallback((e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>): void => {
    setCount(prev => prev + 1)
  }, [])

  const result = useMemo<number>(() => fib(myNum), [myNum]);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleClick}>Add</button>
      <h2>{result}</h2>
    </>
  )
}

export default App
