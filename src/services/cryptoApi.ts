import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createApi } from "@reduxjs/toolkit/query/react";
import { Crypto } from "../types/crypto";

const BASE_URL = import.meta.env.VITE_BASE_API;

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}`
  }),
  endpoints: (builder) => ({
    getAllCoins: builder.query<Crypto[], void>({
      query: () => "/coins/markets?vs_currency=usd&per_page=100",
      transformResponse: (response: any[]) =>
        response.map((coin) => ({
          id: coin.id,
          symbol: coin.symbol.toUpperCase(),
          name: coin.name,
          image: coin.image,
          price: coin.current_price,
          marketCap: coin.market_cap,
          marketCapRank: coin.market_cap_rank,
          priceChange24h: coin.price_change_24h,
          priceChangePercentage24h: coin.price_change_percentage_24h
        }))
    })
  })
});

export const { useGetAllCoinsQuery } = cryptoApi;
