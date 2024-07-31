import React from 'react'

import "@styles/CoinDetails.scss"

import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { fetchSingleCoin } from '@helpers/apiHelper.js'

import Loader from "@components/Loader.jsx"

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
          <p>{data.name}</p>
          </div>
      )}
    </div>
  );
};

export default CoinDetail;