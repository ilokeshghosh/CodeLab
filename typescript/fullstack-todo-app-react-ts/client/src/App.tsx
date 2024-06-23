import { useState } from 'react'
import { FieldValue, useForm } from 'react-hook-form'



function App() {
  const [count, setCount] = useState(0)
  const { register, handleSubmit } = useForm();
  const formHandler = (data) => {
    console.log('data', data);
  }
  return (
    <>
      {/* wrapper */}
      <div className='w-full h-screen bg-black'>

        {/* todo form section */}
        <div className=''>
          <form onSubmit={handleSubmit(formHandler)}>
            <input type="text" id="title"
              {...register('title')} />

              <input className='text-white' type="submit" value="Submit" />
          </form>
        </div>

        {/* todo list  display section*/}
        <div>

        </div>

      </div>
    </>
  )
}

export default App
