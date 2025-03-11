import React, { useState } from 'react'
import '../index.css'

export default function RandomColorBox() {
  const [color, setColor] = useState('#123h32')

  const getRandomColor = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16)
    setColor(randomColor)
  }

  return (
    <div>
      <div style={{ backgroundColor: color }} className='color-box'>
        {color}
      </div>
      <button
        style={{ borderColor: color, backgroundColor: color }}
        onClick={getRandomColor}
      >
        Change Color
      </button>
    </div>
  )
}
