import React from "react";
import "@styles/Home.scss";
import welcomeimage from "@assets/home-Image.jpg"
import { Link } from "react-router-dom";

import { useQuery } from '@tanstack/react-query'
import { fetchAllCoins } from '@helpers/apiHelper.js'

const Home = () => {

  const {data, error, isPending}= useQuery ({
    queryKey: ["allCoins"],
    queryFn: fetchAllCoins,
  })

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

      <div className="top10">
        <p>Top 10 Cryptos in the world: </p>
        <button>Show more</button>
      </div>

<div className="crypto-table">
  <div className="table-layout">
    <p>#</p>
    <p>Coins</p>
    <p>Symbol</p>
    <p>Price</p>
    <p style={{textAlign:"center"}}>24h Change</p>
    <p className="market-cap">Market Cap</p>
  </div>
 

 <div className="table-body">
 { error && <div> An error occured. Please refresh the page. </div>}
 { isPending && <div>Loading</div>}
  {data && data.slice(0, 10).map((coin) => (
  <div className="table-layout" key={coin.id}>
  <p>{coin.market_cap_rank}</p>
  <div>
  <img src={coin.image}/>
  <p>{coin.name}</p>
  </div>
  <p>{coin.symbol.toUpperCase()}</p>
  <p>${coin.current_price.toFixed(2)}</p>
  <p className={coin.price_change_percentage_24h> 0 ? "green" : "red"}>
  {Math.floor(coin.price_change_percentage_24h*100)/100}
  </p>
  <p className="market-cap">${coin.market_cap.toLocaleString()}</p>
  </div>
  ))}
   </div>
   </div>

  </div>
   )
}

export default Home
