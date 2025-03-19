import React from 'react'
import { Link } from 'react-router-dom'

export default function AboutMe() {
  return (
    <div>
      <Link to={'/projects'}>Back</Link>
      <h2>Name: Asadbek</h2>
      <h3>Hobby: Coding</h3>
    </div>
  )
}
