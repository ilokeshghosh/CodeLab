import { useState, useRef } from 'react'


function App() {
  const [color, setColor] = useState<string>('white');
  const intervalRef = useRef<number>();

  function setRandomColor() {
    const code = Math.floor(Math.random() * 16777215).toString();
    clearInterval(intervalRef.current)
    return '#' + code;
  }

  function setDjColor() {
    clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      const code = Math.floor(Math.random() * 16777215).toString();
      setColor(`#${code}`)
    }, 100)
  }

  function setGeneralColor(color: string) {
    if (color) {
      clearInterval(intervalRef.current)
      setColor(color)
    }
  }



  return (
    <div className='w-full h-screen  duration-200' style={{ backgroundColor: color }}>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
        <button onClick={() => setGeneralColor('green')} className='outline-none px-4 py-1 rounded-full  shadow-lg text-black'>Green</button>
        <button onClick={() => setGeneralColor('blue')} className='outline-none px-4 py-1 rounded-full  shadow-lg text-black'>Blue</button>
        <button onClick={() => setGeneralColor('red')
        } className='outline-none px-4 py-1 rounded-full  shadow-lg text-black'>Red</button>
        <button onClick={() => setGeneralColor('black')} className='outline-none px-4 py-1 rounded-full  shadow-lg text-black'>Black</button>
        <button onClick={() => setColor(setRandomColor())} className='outline-none px-4 py-1 rounded-full  shadow-lg text-black'>Random</button>

        <button onClick={() => setDjColor()} className='outline-none px-4 py-1 rounded-full  shadow-lg text-black'>SetDj</button>
      </div>
    </div>
  )
}

export default App
