import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './Button'

function App() {

  // const myFunc = (n: number) => {
  //   console.log("hey number is : ", n);
  //   return n;
  // };

  const elem = <div>hello from elem</div>;


  return (
    <>
      <Button
      // style={{
      //   backgroundColor: 'red',
      //   padding: '2px 2px 2px 2px',
      //   border: '2px solid red',
      //   borderRadius: '10%'
      // }}

      // borderRadius={{
      //   topRight: 2,
      //   bottomRight: 3,
      //   bottomLeft: 5,
      //   topLeft: 10
      // }}

      // onFunc={myFunc}

      >
        {/* hello there */}
        {/* {elem} */}
      </Button>

      {/* <Button autoFocus={true} type='submit' variant='primary' /> */}


      {/* <Button countValue={50} countHistory={[1, 2, 5, 10, 50]} /> */}
    </>
  )
}

export default App
