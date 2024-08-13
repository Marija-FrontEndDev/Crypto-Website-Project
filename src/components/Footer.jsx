import React from "react";

import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

import "@styles/Footer.scss";
import adressicon from "@assets/adress-icon.svg";
import mailicon from "@assets/mail-icon.svg";
import phoneicon from "@assets/phone-icon.svg";
import facebookicon from "@assets/facebook.png";
import instagramicon from "@assets/instagram.png";
import twittericon from "@assets/twitter.png";

import { darkModeConfig } from "@helpers/zustandDarkMode.js";

const Footer = () => {
  const { darkMode, setDarkMode } = darkModeConfig();

  return (
    <footer className={darkMode ? "footerContainer dark" : "footerContainer"}>
      <div className="footer-container">
        <div className="footer-card" >
        <h3>Company</h3>
      <HashLink to="/#top" className="hovercom">Home</HashLink>
      <HashLink to="/learn-more#top" className="hovercom">About</HashLink>
      <HashLink to="/cryptocurrencies#top"className="hovercom">Prices</HashLink>
      <HashLink to="/login#top" className="hovercom">Log In</HashLink>
        </div>
        <div className="footer-card">
          <h3>Find Us</h3>
          <p className="hover">
            <img src={adressicon} alt="Address icon" className="contacticon" />
            <a
              href="https://www.google.com/maps/place/Garford+St,+London,+%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%B0+%D0%91%D1%80%D0%B8%D1%82%D0%B0%D0%BD%D0%B8%D1%98%D0%B0/@51.5084341,-0.0287846,17z/data=!3m1!4b1!4m6!3m5!1s0x487602c998f32d45:0xd61bab6c99066fe4!8m2!3d51.5084308!4d-0.0262097!16s%2Fg%2F1tfy_lj0?entry=ttu"
              target="_blank"
            >
              {" "}
              Address: <br /> Garford St, <br /> London, E14 5EP
            </a>
          </p>
          <h3> Contact Us</h3>
          <p>
            {" "}
            <img
              src={phoneicon}
              alt="Phone icon"
              className="contacticon"
            />{" "}
            +128999207456
          </p>
          <p className="hover">
            <img src={mailicon} alt="Mail icon" className="contacticon" />
            <a href="mailto:support@cryptoworld.net">support@cryptoworld.net</a>
          </p>
        </div>
        <div className="footer-card">
        <h3>Legal info</h3>
          <p className="hover"> Privacy Policy</p>
          <p className="hover">Terms & Conditions</p>
        </div>
        <div className="footer-card">
        <h3>About the company </h3>
          <p>
            We're the most trusted place for people and businesses to buy, sell,
            and manage crypto.
          </p>
          <h3>Follow US</h3>
          <p className="social">
            <img src={facebookicon} /> <img src={instagramicon} /> <img src={twittericon} />
          </p>
        </div>
      </div>
      <p className="copyRight">
        Copyright © 2024 CryptoWorld. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
