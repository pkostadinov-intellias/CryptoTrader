import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Crypto } from "../types/crypto";

const initialState: Crypto[] = [];

export const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    addCryptoCoin: (state, action: PayloadAction<Crypto>) => {
      const coin = action.payload;

      const existingCoin = state.find((c) => c.id === coin.id);

      if (existingCoin) {
        existingCoin.balance = (existingCoin.balance || 0) + coin.price;
      } else {
        state.push({ ...coin, balance: coin.price });
      }
    },

    removeCryptoCoin: (state, action: PayloadAction<Crypto>) => {
      const coin = action.payload;
      const existingCoin = state.find((c) => c.id === coin.id);

      if (existingCoin) {
        existingCoin.balance! -= coin.price;

        if (existingCoin.balance! <= 0) {
          const index = state.findIndex((c) => c.id === coin.id);
          if (index !== -1) state.splice(index, 1);
        }
      }
    }
  }
});

export const { addCryptoCoin, removeCryptoCoin } = portfolioSlice.actions;
export default portfolioSlice.reducer;
