import React, { useEffect, useState } from 'react'              
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function Projects() {
  const [projects, setProjects] = useState([])
  async function fetchData() {
    try {
      let res = await fetch(
        'https://jsonplaceholder.typicode.com/posts?_limit=5'
      )
      if (!res.ok) {
        throw new Error('New Error')
      }

      let data = await res.json()
      setProjects(data)
      console.log(data)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])
  

  return (
    <div>
      <Navbar />
      <ul>
        {projects.map(element => {
            return<li key={element.id}>
            <h3>{element.title}</h3>
            <Link to={`/project/${element.id}`}>View Details</Link>
          </li>
        })}
      </ul>
    </div>
  )
}
