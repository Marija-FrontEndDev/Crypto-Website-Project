import React from 'react'

import "@styles/CoinDetails.scss"

import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { fetchSingleCoin } from '@helpers/apiHelper.js'

import Loader from "@components/Loader.jsx"
import CoinChart from '@components/CoinChart.jsx'

import { darkModeConfig } from "@helpers/zustandDarkMode.js";


const CoinDetail = () => {

  const { darkMode, setDarkMode } = darkModeConfig();

  const { id } = useParams();

  const { data, error, isPending } = useQuery({
    queryKey: ["singleCoin", id],
    queryFn: () => fetchSingleCoin(id),
  });

  return (
    <div className={darkMode ? "CoinDetails dark" : "CoinDetails"}>
<div className='coin-container'>
  { error && <div> An error occured. Please refresh the page. </div>}
      { isPending && <Loader />}
      {data &&  (
        <div className='coin-details-card'>
          <img className='coinImage'  src={data.image.large} alt={data.name} />
          <h1 className='cointitle'>{data.name} ({data.symbol.toUpperCase()})</h1>
          <p className='coin-chart'> <CoinChart /></p>
          <div className='coin-info'>
          <p><span>Crypto Market Rank:</span> {data.market_cap_rank}</p>
          <p><span>Current Price:</span> ${data.market_data.current_price.usd.toLocaleString()}</p>
          <p><span>Market Cap:</span> ${data.market_data.market_cap.usd.toLocaleString()}</p>
          <p><span>24h Change:</span> {data.market_data.price_change_percentage_24h.toLocaleString()}%</p>
          <p><span>24h high:</span> ${data.market_data.high_24h.usd.toLocaleString()}</p>
          <p><span>24h low:</span> ${data.market_data.low_24h.usd.toLocaleString()}</p>
          </div>
          </div>
      )}
  </div>
    </div>
    
  );
};

export default CoinDetail;