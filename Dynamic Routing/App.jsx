import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetails'
import AboutMe from './pages/AboutMe'
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/about' element={<AboutMe />} />
        <Route path='/project/:id' element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  )
}
