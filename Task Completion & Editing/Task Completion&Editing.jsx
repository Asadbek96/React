import React, { useState } from 'react'
import '../index.css'

export default function TaskCompletion() {
  const [login, setLogin] = useState(false)
  const [register, setRegister] = useState(false)
  return (
    <div>
      <h2>{register && 'Register Form'}</h2>
      <h2 style={{ display: register ? 'none' : 'block' }}>
        {login ? 'Basty betke qosh keldiniz' : 'Juiege kiru qajet'}
      </h2>
      <input
        style={{ display: !register ? 'none' : 'block' }}
        type='email'
        placeholder='Name'
      />
      <input
        style={{ display: !register ? 'none' : 'block' }}
        type='email'
        placeholder='Last Name'
      />
      <input
        style={{ display: !register ? 'none' : 'block' }}
        type='email'
        placeholder='Email'
      />
      <input
        style={{ display: !register ? 'none' : 'block' }}
        type='password'
        placeholder='Password'
      />
      <input
        style={{ display: !register ? 'none' : 'block' }}
        type='password'
        placeholder='Phone Number'
      />
      <button
        style={{ display: register ? 'none' : 'block' }}
        onClick={() => setLogin(!login)}
      >
        {!login ? 'Login' : 'Log out'}
      </button>
      <button
        style={{ display: login ? 'none' : 'block' }}
        onClick={() => setRegister(!register)}
      >
        Register
      </button>
    </div>
  )
}
