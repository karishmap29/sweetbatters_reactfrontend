import React from 'react'
import Body from '../components/Body'
import DessertCard from '../components/DessertCard'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HomeBody from '../components/HomeBody'






function Home() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div><HomeBody/></div>
     
      <div><Footer/></div>
    </div>
  )
}

export default Home