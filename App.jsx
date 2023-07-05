import React from 'react'
import Navbar from './components/Navbar.jsx'
import Card from './components/Card.jsx'
import data from './DB/data.js'

export default function App() {

  const [darkMode, setDarkMode] = React.useState(true)
  function toggleDarkMode(){
    setDarkMode(prevState => !prevState)
  }
  
  const places = data.map(place =>{
    return (
    <Card 
    key={place.id}
    place={place}
    isDarkMode={darkMode}
    />
    )
    
  })
  return (
    <div>
    <Navbar isDarkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
    <div className={darkMode ? "main--dark": "main"}>
      {places}
    </div>
    </div>
  )
}
