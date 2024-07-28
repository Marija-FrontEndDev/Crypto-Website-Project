import React from 'react'

import "@styles/NavBar.scss"
import logo from "@assets/logo-pic.webp"

import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='navbar'>
      
      
        <div className='logo'>
        <img src={logo} alt="" />
        <h3>CryptoWorld</h3>

        </div>
        <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cryptocurrencies">Cryptocurrencies</Link>
        </li>
        <li>
          <Link to="/news">News</Link>
        </li>
      </ul>

        <div className='nav-right'>
            <button className='login'>
            <Link to="/login">Log In</Link>
            </button>
            <button className='start'>
            <Link to="/get-started">Get Started</Link>
            </button>

        </div>
    </div>
  )
}


export default NavBar