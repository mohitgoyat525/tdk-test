import React from 'react'
import Hero from '../components/home/Hero'
import Patners from '../components/home/Patners'
import CharcterSwiper from '../components/home/CharcterSlider'


const Home = () => {
  return (
      <div>
          <Hero />
      <Patners />
      <CharcterSwiper/>
    </div>
  )
}

export default Home