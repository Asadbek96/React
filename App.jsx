import React from 'react'
import './App.css'

import Footer from './components/Footer'
import BookCard from './components/BookCard'

function App() {
  return (
    <>
      <h1>My profile cards</h1>
      <div className='cards'>
        <BookCard
          name='James'
          author='Персиваль Эверетт'
          img='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTPD5moUTKq5AB5wgdzGt944GbbWsNmgm1Wm_ne-tuYHv5LK0kW'
          year='2012'
        />
        <BookCard
          name='All Fours'
          author='Миранда Джулай'
          img='https://s1.livelib.ru/boocover/1010114917/200x305/034e/boocover.jpg'
          year='1998'
        />
        <BookCard
          name='Mastyr'
          author='Кавех Акбар'
          img='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQI7V-HA3nk4ksJ3fLaYRgHdj-2lmC3Zromqr3n2bYzn5qIchWo'
          year='2008'
        />
      </div>
      <Footer />
    </>
  )
}

export default App
