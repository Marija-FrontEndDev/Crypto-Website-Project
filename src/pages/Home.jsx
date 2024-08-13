import React from "react";
import "@styles/Home.scss";
import Loader from "@components/Loader.jsx";
import welcomeimage from "@assets/welcome-image.png"
import arrow from "@assets/arrow.svg"

import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

import { useQuery } from '@tanstack/react-query'
import { fetchAllCoins } from '@helpers/apiHelper.js'

// global state
import { darkModeConfig } from "@helpers/zustandDarkMode.js";

const Home = () => {

  const { darkMode, setDarkMode } = darkModeConfig();

  const {data, error, isPending}= useQuery ({
    queryKey: ["allCoins"],
    queryFn: fetchAllCoins,
  })

  return (
    <div >
      <div id="top"></div>
    <div className={darkMode ? "Home dark" : "Home"}>
    <div className="welcome-page">
      <img src= {welcomeimage} alt="Welcomeimage" />
      <div className="welcome-text"> 
      <h1>Welcome to the CryptoWorld!</h1>
      <p>Explore the world of cryptocurrency and how you can start buying, selling, and trading it.</p>
    <div className="buttons">
    <button> <Link to="/get-started">Get Started</Link> </button>
    <button> <Link to="/learn-more">Learn More</Link> </button>
    </div>
      </div>
      </div>

      <div className="top10">
        <p>Top 10 Cryptos in the world: </p>
        <button>
         < Link to ="/cryptocurrencies">Show more</Link>
        </button>
      </div>

 <div className="container-topten">
 { error && <div> An error occured. Please refresh the page. </div>}
 { isPending && <Loader />}
  {data && data.slice(0, 10).map((coin) => (
    <Link to ={`/coin/${coin.id}`} key={coin.id} style={{ textDecoration: 'none' }}>
<div className="home-coins" key={coin.id}>
  <div className="card-top">
  <p>{coin.market_cap_rank}. {coin.name} ({coin.symbol.toUpperCase()})</p>
  <img src={coin.image} className="smallcoinimage"/>
  </div>
  <div className="basic-coin-info">
  <p>Price: ${coin.current_price.toFixed(2)}</p>
  <span className={coin.price_change_percentage_24h> 0 ? "green" : "red"}>
    Daily Change: {Math.floor(coin.price_change_percentage_24h*100)/100}
  </span>
  </div>
  </div>
    </Link>

  ))}
   </div>

   <div className="FAQ">
    <h2>Frequently Asked Questions</h2>
    <div className="FAQ-container">
  <HashLink to="/learn-more#what-is-cryptocurrency" className="FAQ-card"><span>What is cryptocurrency?</span>
  <img src={arrow} alt="arrow" /></HashLink>
  <HashLink to="/learn-more#how-does-it-work" className="FAQ-card"><span>How does cryptocurrency work?</span>
  <img src={arrow} alt="arrow" /></HashLink>
  <HashLink to="/learn-more#future-of-finance" className="FAQ-card"> <span>Why is cryptocurrency the future of finance?</span>
  <img src={arrow} alt="arrow" /></HashLink>
  <HashLink to="/learn-more#uses-of-crypto" className="FAQ-card"><span>What can you do with cryptocurrency?</span>
  <img src={arrow} alt="arrow" /></HashLink>
</div>
    </div>

    <div className="startearning">
      <h2>Start earning today</h2>
      <button> <HashLink to="/get-started#top">Sign Up Now</HashLink> </button>
    </div>

    </div>
  </div>
   )
}

export default Home
