import React from 'react'
import bgImg from './Img/bg-img.jpg'
import './Home.css'
import Navbar from '../Navbar/Navbar'
const Home = () => {
  return (
    <>
    <Navbar />
      <div className="container" id='Home'>
        <div class="background-image">
          <img src={bgImg} alt="" />
        </div>
        <div class="overlay"></div>
        <div className="content">
          <div className="content-text">
            <h2><span>KN</span> Hostel</h2>
            <h3>A-148, Sector-1, Vedvyaspuri, Meerut - 250002</h3>
          </div>
        </div>
        <div className="action">
          <button className="btn"><a href="#Contact">Contact Us</a></button>
        </div>
      </div>
    </>
  )
}

export default Home