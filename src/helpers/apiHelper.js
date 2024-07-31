import axios from "axios";

const allCoinsApiEndpoint = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd";

export const fetchAllCoins = async () => {
  const { data } = await axios.get(allCoinsApiEndpoint);
  return data;
};

const singleCoinApiEndpoint= "https://api.coingecko.com/api/v3/coins/";

export const fetchSingleCoin = async (id) => {
  const { data } = await axios.get(`${singleCoinApiEndpoint}${id}`);
  return data;
};

