import React from 'react'

import "@styles/NavBar.scss"
import logo from "@assets/logo-pic.webp"

import MoonIcon from "@assets/moon.jpg";

import { Link } from 'react-router-dom'
import { useEffect } from 'react';

// global state
import { darkModeConfig } from "@helpers/zustandDarkMode.js";

const NavBar = () => {

  const { darkMode, setDarkMode } = darkModeConfig();

  useEffect(() => {
    localStorage.setItem("DarkTheme", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <nav className={darkMode ? "navbar dark" : "navbar"}>
<div className='navbar'>
        <div className='logo'>
        <img src={logo} alt="" /> 
          <Link to="/"><h3>CryptoWorld</h3></Link>
        </div>
        <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cryptocurrencies">Cryptocurrencies</Link>
        </li>
        <li>
          <Link to="/learn-more">Learn More</Link>
        </li>
      </ul>

        <div className='nav-right'>
            <button className='login'>
            <Link to="/login">Log In</Link>
            </button>
            <button className='start'>
            <Link to="/get-started">Get Started</Link>
            </button>
            <button onClick={() => setDarkMode()}>
            <img src={MoonIcon} alt="moon icon" className="moonicon"/>
          </button>

        </div>
    </div>

    </nav>
    
  )
}


export default NavBar