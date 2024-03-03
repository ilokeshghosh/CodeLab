import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function handleIncrement() {
    setCount(prev => prev + 1);
  }

  function handleDerement() {
    if (count <= 0) {
      setCount(0)
      return;
    }
    setCount(prev => prev - 1)
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Value is {count}</h1>
      <div className="card">
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDerement}>Decrement</button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
