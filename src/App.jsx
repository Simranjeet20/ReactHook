// import { Button } from 'react-bootstrap'
// import React, { useEffect, useState } from 'react'

// export default function App() {
//   const[count,increase]= useState(0);
//   const[power,calculate]=useState(0);
  
//   // useEffect(() => {
//   //   setTimeout(() => {
//   //     increase((count) => count + 1);
//   //   }, 1000);})
//          useEffect(() => {calculate(count*count),[count]})
//   return (
//     <>
//     <center>
//     <h1>You clicked {count} time</h1>
//     {/* <Button onClick={()=>{increase(count+1)}}>Click me</Button> */}
//     <Button onClick={()=>{increase(count+1)}}>POWER</Button>
//     <h3>Tht power is {count}is :{power}</h3>
//     </center>
//     </>
//   )
// }

import React from 'react'
import Youtube from './Youtube'

export default function App() {
  return (
    <Youtube/>
  )
}

