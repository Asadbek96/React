import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function Home() {
  // const silteu = useNavigate()
  // const handleClick = () => {
  //   silteu('/about-us')
  // }
  // const handleClick2 = ()=>{
  //   silteu('/')
  // }
  return (
    <div>
      <Navbar/>
      <h2>Basty betke qosh keldiniz!</h2>
      {/* //  <h2>Bastapqy bet</h2> */}
      {/* //  <button onClick={handleClick}>Login</button> */}
      {/* //  <button onClick={handleClick2}>Register</button> */}
    </div>
  )
}
