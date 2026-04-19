import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Overview from './components/Overview'
import Itinerary from './components/Itinerary'
import Budget from './components/Budget'
import Tickets from './components/Tickets'
import TransportHacks from './components/TransportHacks'
import CardHunt from './components/CardHunt'
import Accommodation from './components/Accommodation'
import Fitness from './components/Fitness'
import Wardrobe from './components/Wardrobe'
import Tips from './components/Tips'
import PackingChecklist from './components/PackingChecklist'
import Footer from './components/Footer'
import SakuraPetals from './components/SakuraPetals'

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <SakuraPetals />
      <Navbar />
      <Hero />
      <Overview />
      <Itinerary />
      <Accommodation />
      <Budget />
      <Tickets />
      <TransportHacks />
      <CardHunt />
      <Fitness />
      <Wardrobe />
      <Tips />
      <PackingChecklist />
      <Footer />
    </div>
  )
}

export default App
