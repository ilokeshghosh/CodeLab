import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button'
import { Form } from './components/Form'
import { CounterProvider } from './provider/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CounterProvider>
      <Form />
      <Button text='click me' />
    </CounterProvider>
    </>
  )
}

export default App
