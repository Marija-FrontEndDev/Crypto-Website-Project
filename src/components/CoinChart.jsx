import React from 'react'
import Chart from 'react-google-charts'

import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { fetchHistoricalChartData } from '@helpers/apiHelper.js'

import Loader from "@components/Loader.jsx"

const processChartData = (data) => {
    const processedData = [['Date', 'Price']];
    const prices = data?.prices || [];

    prices.forEach(([timestamp, price]) => {
        const date = new Date(timestamp);
        processedData.push([date.toLocaleDateString(), price]);
    });

    return processedData;
};


const CoinChart = () => {
    const { id } = useParams();

    const { data, error, isPending } = useQuery ({
        queryKey: ["historicalChartData", id],
        queryFn: () => fetchHistoricalChartData(id),
      });

      const chartData = processChartData(data);

  return (
    <div>
        { error && <div> An error occured. Please refresh the page. </div>}
        { isPending && <Loader />}
        {data &&  (
            <div>
        <Chart
        width={'100%'}
        height={'250px'}
        chartType="LineChart"
        loader={<Loader />}
        data={chartData}
        options={{
            curveType: 'function',
          }}
        legendToggle
      />
            </div>
        )}
    </div>
  )
}

export default CoinChart 