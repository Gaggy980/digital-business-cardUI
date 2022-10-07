
import React, { useState } from 'react'
import './App.css'
import About from './components/About'
import Info from './components/Info'
import Interests from './components/Interests'
import Social from './components/Social'

const App = () => {
  return (
    <div className="bg-card">
      <div className="card">
        <Info />
        <About />
        <Interests />
        <Social />
      </div>
    </div>
  )
}

export default App
