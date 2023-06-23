import React from 'react'
import Navbar from './components/Navbar.jsx'
import Card from './components/Card.jsx'
import data from './DB/data.js'

export default function App() {
  
  const places = data.map(place =>{
    return (
    <Card 
    key={place.id}
    img={place.img}
    name={place.name}
    detail={place.detail}
    />
    )
    
  })
  return (
    <div>
    <Navbar />
    <section className='card--list'>
      {places}
    </section>
    </div>
  )
}
