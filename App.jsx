import React from 'react'
import Navbar from './components/Navbar.jsx'
import Card from './components/Card.jsx'
import data from './DB/data.js'

export default function App() {
  
  const places = data.map(place =>{
    return (
    <Card 
    key={place.id}
    place={place}
    />
    )
    
  })
  return (
    <div>
    <Navbar />
    <section className='container'>
      {places}
    </section>
    </div>
  )
}
