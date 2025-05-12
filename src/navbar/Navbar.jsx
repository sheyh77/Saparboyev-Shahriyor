import React from 'react'
import './navbar.css';
import menu from '../assets/icons/menu-regular-24.png'

function Navbar() {
  return (
    <div className='navbar'>
      <div className="cantainer">
        <div className="nav-wrap">
          <a href='/' className="navbar-logo">Shahriyor</a>
          <div className="nav-menu">
            <div className="nav-text">
              <a href="/" className="nav-title">Home</a>
              <a href="#" className="nav-title">About</a>
              <a href="#" className="nav-title">Services</a>
              <a href="#" className="nav-title">Portfolio</a>
              <a href="#" className="nav-title">Contact</a>
            </div>
            <button className='menu-btn'>
              <img src={menu} alt="menu-image" className='menu-img' />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar