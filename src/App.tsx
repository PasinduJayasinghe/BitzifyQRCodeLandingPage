import React, { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Updates from './components/Updates'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showUpdates, setShowUpdates] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleGetUpdates = () => {
    setShowUpdates(true)
  }

  const handleBack = () => {
    setShowUpdates(false)
  }

  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-brand">Sri Dalada Maligawa</div>
        <button className="menu-toggle" onClick={toggleMenu}>
          <span className="hamburger"></span>
          <span className="hamburger"></span>
          <span className="hamburger"></span>
        </button>
      </nav>

      <main>
        {!showUpdates ? (
          <Hero onGetUpdates={handleGetUpdates} />
        ) : (
          <Updates onBack={handleBack} />
        )}
      </main>
    </div>
  )
}

export default App
