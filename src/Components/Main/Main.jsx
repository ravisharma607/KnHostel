import React from 'react'
import './Main.css'
import Navbar from '../Navbar/Navbar'
import Home from '../Home/Home'
import Gallery from '../Gallery/Gallery'
import Contact from '../ContactMe/Contact'
import Services from '../Services/Services'
import Footer from '../Footer/Footer'
import Review from '../Reviews/Review'
import About from '../AboutUs/About'
import Faq from '../FAQ/Faq'
const Main = () => {
  return (
    <>
  <Navbar />
  <Home />
  <Gallery />
  <Services />
  <Review />
  <Contact />
  <Faq />
  <About />
  <Footer />
    </>
  )
}

export default Main

