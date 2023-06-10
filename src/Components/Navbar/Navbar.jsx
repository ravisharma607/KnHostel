import React from 'react'
import './Navbar.css'
import direction from './Img/direction.png'
const Navbar = () => {


  window.addEventListener('scroll', function () {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
      navbar.classList.add('blurred');
    } else {
      navbar.classList.remove('blurred');
    }
  });

  function showSideNav() {
    document.querySelector('.sideNav').classList.add('acive')
  }
  function hideSideNav() {
    document.querySelector('.sideNav').classList.remove('acive')
  }
  
  function toggleNavbar(){
    document.querySelector('.sideNav').classList.remove('acive')
  }

  return (
    <>
      <nav className="navbar">
        <div className="sideNav">
          <div className="sideNavbar" onClick={toggleNavbar}>
            <div className="cross" onClick={hideSideNav}>
              <ion-icon name="close"></ion-icon>
            </div>
            <div className="links">
              <ul>
                <li><a href='#Home'>Home</a></li>
                <li><a href='#Gallery'>Gallery</a></li>
                <li><a href='#Services'>Services</a></li>
                <li><a href='#Contact'>Contact Us</a></li>
                <li><a href='#reviews'>Reviews</a></li>
                <li><a href='#aboutUs'>About Us</a></li>
                <li><a href='#faqContainer'>FAQ</a></li>
              </ul>
            </div>
          </div>
        </div>


        <div className="left">
          <div className="menuIcon">
            <span onClick={showSideNav}><ion-icon name="menu"></ion-icon></span>
          </div>
          <div className="logo">
            <h2><span>KN</span>Hostel</h2>
          </div>
        </div>
        <div className="right">
          <div className='email'><a href="mailto:support@knhoatel.com" target='_blank' className='flex'><ion-icon name="mail"></ion-icon> Contact</a></div>
          <div className='direction'><a href="https://goo.gl/maps/YCppuCJB9NQPHVwk9" target='_blank' className='flex'><img src={direction} alt="" /> Get Direction</a></div>
        </div>
      </nav>
    </>
  )
}

export default Navbar