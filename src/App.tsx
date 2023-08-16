import React from 'react'
import Navbar from './sections/Navbar'
import Wraper from './sections/Wraper'
import Footer from './sections/Footer'
import Background from './components/Background'
import "./scss/index.scss"

const App = () => {
  return (
    <div className='main-coinatiner'>
      <Background />
      <div className="app">
        <Navbar />
        <Wraper />
        <Footer />
      </div>
    </div>
  )
}

export default App