import React from 'react'

import "@styles/NavBar.scss"
import logo from "@assets/logo-pic.webp"

const NavBar = () => {
  return (
    <div className='navbar'>
        <div className='logo'>
        <img src={logo} alt="" />
        <h3>CryptoWorld</h3>
        </div>
        
        <ul>
            <li>Home</li>
            <li>Cryptocurrencies</li>
            <li>News</li>
            
        </ul>
        <div className='nav-right'>
            <button className='login'>Log In </button>
            <button className='start'>Get Started</button>

        </div>
    </div>
  )
}

export default NavBar