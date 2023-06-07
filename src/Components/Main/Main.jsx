import React from 'react'
import './Main.css'
import Navbar from '../Navbar/Navbar'
import Home from '../Home/Home'
import Gallery from '../Gallery/Gallery'
import Contact from '../ContactMe/Contact'
import Services from '../Services/Services'
import Footer from '../Footer/Footer'
const Main = () => {
  return (
    <>
  <Navbar />
  <Home />
  <Gallery />
  <Services />
  <Contact />
  <Footer />
    </>
  )
}

export default Main

