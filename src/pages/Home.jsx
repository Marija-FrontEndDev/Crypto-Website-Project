import React from "react";
import "@styles/Home.scss";
import welcomeimage from "@assets/home-Image.jpg"
import { Link } from "react-router-dom";

const Home = () => {
  return (
  <div>
    <div className="welcome-page">
      <div className="left-side"> 
      <h1>Welcome to the <br/> CryptoWorld!</h1>
      <button> <Link to="/get-started">Get Started</Link> </button>
      </div>
      <div className="right-side">
      <img src= {welcomeimage} alt="Welcomeimage" />
      <p>"The biggest risk person can take is to do nothing"</p>
      <p className="writer"> -Robert Kiyosaki</p>
      </div>
      </div>

<div className="crypto-table">
  
  <div className="table-layout">
    <p>#</p>
    <p>Coins</p>
    <p>Price</p>
    <p style={{textAlign:"center"}}>24h Change</p>
    <p className="market-cap">Market Cap</p>
  </div>


    </div>
  </div>
   )
}

export default Home
