import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Crypto } from "../types/crypto";

const initialState: Crypto[] | undefined = [];

export const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    addCryptoCoin: (state, action: PayloadAction<Crypto>) => {
      state.push(action.payload);
    },
    removeCryptoCoin: (state, action: PayloadAction<Crypto>) => {
      return state.filter((crypto) => crypto.id !== action.payload.id);
    }
  }
});

export const { addCryptoCoin, removeCryptoCoin } = portfolioSlice.actions;
