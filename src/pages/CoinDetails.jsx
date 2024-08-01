import React from 'react'

import "@styles/CoinDetails.scss"

import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { fetchSingleCoin } from '@helpers/apiHelper.js'

import Loader from "@components/Loader.jsx"
import CoinChart from '@pages/CoinChart.jsx'

const CoinDetail = () => {
  const { id } = useParams();

  const { data, error, isPending } = useQuery({
    queryKey: ["singleCoin", id],
    queryFn: () => fetchSingleCoin(id),
  });

  return (
    <div>
      { error && <div> An error occured. Please refresh the page. </div>}
      { isPending && <Loader />}
      {data &&  (
        <div>
          <img src={data.image.large} alt={data.name} />
          <h1>{data.name} ({data.symbol.toUpperCase()})</h1>
          <p> <CoinChart /></p>
          <p>Crypto Market Rank: {data.market_cap_rank}</p>
          <p>Current Price: ${data.market_data.current_price.usd.toLocaleString()}</p>
          <p>Market Cap: ${data.market_data.market_cap.usd.toLocaleString()}</p>
          <p>24h Change: {data.market_data.price_change_percentage_24h.toLocaleString()}%</p>
          <p>24h high: ${data.market_data.high_24h.usd.toLocaleString()}</p>
          <p>24h low : ${data.market_data.low_24h.usd.toLocaleString()}</p>
          </div>
      )}
    </div>
  );
};

export default CoinDetail;