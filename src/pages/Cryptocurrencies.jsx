import React from "react";
import { useState } from "react";
import "@styles/Cryptocurrencies.scss";
import { useQuery } from "@tanstack/react-query";
import { fetchAllCoins } from "@helpers/apiHelper.js";
import Loader from "@components/Loader.jsx";
import { Link } from "react-router-dom";
import search from "@assets/search.png"
import { darkModeConfig } from "@helpers/zustandDarkMode.js";

const Cryptocurrencies = () => {

  const { darkMode, setDarkMode } = darkModeConfig();

  const [searchCoin, setSearchCoin] = useState("");

  const { data, error, isPending } = useQuery({
    queryKey: ["allCoins"],
    queryFn: fetchAllCoins,
  });

  const filteredCoins = data?.filter(
    (coin) =>
      coin.name.toLowerCase().includes(searchCoin.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(searchCoin.toLowerCase())
  );

  return (
    <div className={darkMode ? "Crypto dark" : "Crypto"}>
      <div className="searchcrypto" >
        <input
          type="text"
          placeholder="Search cryptocurrency..."
          value={searchCoin}
          onChange={(e) => setSearchCoin(e.target.value)}
        />
      </div>
      <div className="crypto-table" >
      <div className={darkMode ? "Crypto table" : "Crypto"}>
<div className="table-layout" >
  <p>#</p>
  <p>Coins</p>
  <p>Symbol</p>
  <p>Price</p>
  <p style={{ textAlign: "center" }}>24h Change</p>
  <p className="market-cap">Market Cap</p>
</div>
<div className="table-body">
  {error && <div> An error occured. Please refresh the page. </div>}
  {isPending && <Loader />}
  {filteredCoins &&
    filteredCoins.map((coin) => (
      <Link
        to={`/coin/${coin.id}`}
        key={coin.id}
        style={{ textDecoration: "none" }}
      >
        <div className="table-layout" key={coin.id}>
          <p>{coin.market_cap_rank}</p>
          <div>
            <img src={coin.image} />
            <p>{coin.name}</p>
          </div>
          <p>{coin.symbol.toUpperCase()}</p>
          <p>${coin.current_price.toLocaleString()}</p>
          <p
            className={
              coin.price_change_percentage_24h > 0 ? "green" : "red"
            }
          >
            {Math.floor(coin.price_change_percentage_24h * 100) / 100}%
          </p>
          <p className="market-cap">
            ${coin.market_cap.toLocaleString()}
          </p>
        </div>
      </Link>
    ))}
</div>
</div>
</div>
      
    </div>
  );
};

export default Cryptocurrencies;
