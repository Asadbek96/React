import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function ProjectDetail() {
  const [project, setProject] = useState()
  let { id } = useParams()
  console.log(id) 

  async function fetchData() {
    try {
      let responce = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      )
      if (!responce.ok) {
        throw new Error('New error')
      }

      let data = await responce.json()
      setProject(data)
      console.log(data)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    fetchData()
  }, [id])

  
  if (project) {
    return (
      <div>
        <h4>{project.title}</h4>
        <p>{project.body}</p>
        <Link to={'/projects'}>Back</Link>
      </div>
    )
  }
}
