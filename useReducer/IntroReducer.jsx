import React, { useReducer, useState } from 'react'

const initialState = 'white'

function reducer(state, action) {
  switch (action.type) {
    case 'white':
      return 'white'
    case 'black':
      return 'black'
    case 'blue':
      return 'blue'
    default:
      return state
  }
}

export default function IntroReducer() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div
      style={{
        backgroundColor: state,
        height: '100vh',
        textAlign: 'center',
      }}
    >
      <button onClick={() => dispatch({ type: 'white' })}>White</button>
      <button onClick={() => dispatch({ type: 'black' })}>Black</button>
      <button onClick={() => dispatch({ type: 'blue' })}>Blue</button>
    </div>
  )
}
