import React from 'react'

import "@styles/NavBar.scss"

import logo from "@assets/logo-pic.webp"
import DarkThemeIcon from "@assets/dark-theme.jpg";
import HamburgerIcon from "@assets/hamburgermenu.jpg";

import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import { useState } from 'react';

// global state
import { darkModeConfig } from "@helpers/zustandDarkMode.js";

const NavBar = () => {

  const { darkMode, setDarkMode } = darkModeConfig();
  const [hamburgerMenu, sethamburgerMenu] = useState(false);

  useEffect(() => {
    localStorage.setItem("DarkTheme", JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleNav = () => {
    sethamburgerMenu(!hamburgerMenu);
  };

  const closeMenu = () => {
    setHamburgerMenu(false);
  };

  return (
    <nav className={darkMode ? "navbar dark" : "navbar"}>
<div className='navbar'>
        <div className='logo'>
        <img src={logo} alt="" /> 
          <Link to="/"><h3>CryptoWorld</h3></Link>
        </div>
        <button className='hamburger' onClick={toggleNav}>
          <img src={HamburgerIcon} alt="HamburgerIcon" />
        </button>
        <ul className={`nav-links ${hamburgerMenu ? 'open' : ''}`}>
          <div className='left-side-nav'>
          <li>
          <Link to="/" onClick={closeMenu}>Home</Link>
        </li>
        <li>
          <Link to="/cryptocurrencies" onClick={closeMenu}>Cryptocurrencies</Link>
        </li>
        <li>
          <Link to="/learn-more" onClick={closeMenu}>Learn More</Link>
        </li>
          </div>
        <div className='right-side-nav'>
        <li>
            <Link to="/login" onClick={closeMenu} >Log In</Link>
          </li>
          <li>
            <Link to="/get-started" className="start" onClick={closeMenu}>Get Started</Link>
          </li>
          <button onClick={() => setDarkMode()}>
            <img src={DarkThemeIcon} alt="DarkThemeIcon" className="DarkThemeIcon"/>
          </button>
        </div>
      </ul>
    </div>
    </nav>
  )
}


export default NavBar