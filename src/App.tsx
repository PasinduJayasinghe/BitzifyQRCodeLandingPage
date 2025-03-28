import React, { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Updates from './components/Updates'
import BitzifyInfo from './components/BitzifyInfo'
import Footer from './components/Footer'

function App() {
  const [showUpdates, setShowUpdates] = useState(false)

  const handleGetUpdates = () => {
    setShowUpdates(true)
  }

  const handleBack = () => {
    setShowUpdates(false)
  }

  return (
    <div className="app">
      <main>
        {!showUpdates ? (
          <>
            <Hero onGetUpdates={handleGetUpdates} />
            <BitzifyInfo />
            <Footer />
          </>
        ) : (
          <Updates onBack={handleBack} />
        )}
      </main>
    </div>
  )
}

export default App
