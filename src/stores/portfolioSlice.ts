import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Crypto } from "../types/crypto";
import { showToast } from "../utils/toast";
import { RootState } from "./store";

interface PortfolioState {
  balance: number;
  invested: number;
  holdings: Record<string, { coin: Crypto; amount: number; invested: number }>;
}

const initialState: PortfolioState = {
  balance: 0,
  invested: 0,
  holdings: {}
};

export const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    addCryptoCoin: (
      state,
      action: PayloadAction<{ coin: Crypto; quantity: number }>
    ) => {
      const { coin, quantity } = action.payload;
      const cost = coin.price * quantity;

      if (state.balance < cost) {
        showToast(
          `Not enough balance to buy ${quantity} ${coin.symbol}`,
          "error"
        );
        return;
      }

      if (state.holdings[coin.id]) {
        state.holdings[coin.id].amount += quantity;
        state.holdings[coin.id].invested += cost;
      } else {
        state.holdings[coin.id] = { coin, amount: quantity, invested: cost };
      }

      state.balance -= cost;
      state.invested += cost;

      showToast(`Successfully bought ${quantity} ${coin.symbol}`, "success");
    },

    removeCryptoCoin: (
      state,
      action: PayloadAction<{ coin: Crypto; quantity: number }>
    ) => {
      const { coin, quantity } = action.payload;

      if (!state.holdings[coin.id]) {
        showToast(`You don't have ${coin.symbol} in your portfolio!`, "error");
        return;
      }

      const holding = state.holdings[coin.id];
      const sellValue = coin.price * quantity;

      if (holding.amount < quantity) {
        showToast(`Not enough ${coin.symbol} to sell ${quantity}`, "error");
        return;
      }

      const investmentReduction =
        (holding.invested / holding.amount) * quantity;

      holding.amount -= quantity;
      holding.invested = Math.max(holding.invested - investmentReduction, 0);

      state.balance += sellValue;
      state.invested = Math.max(state.invested - investmentReduction, 0);

      if (holding.amount <= 0) {
        delete state.holdings[coin.id];
      }

      showToast(`Successfully sold ${quantity} ${coin.symbol}`, "success");
    },

    depositBalance: (state, action: PayloadAction<number>) => {
      if (typeof action.payload !== "number" || isNaN(action.payload)) {
        showToast("Deposit amount must be a valid number!", "error");
        return;
      }
      if (action.payload <= 0) {
        showToast("Deposit amount must be a positive number!", "error");
        return;
      }

      state.balance += action.payload;
      showToast(
        `Successfully deposited $${action.payload.toFixed(2)}`,
        "success"
      );
    },

    withdrawBalance: (state, action: PayloadAction<number>) => {
      if (typeof action.payload !== "number" || isNaN(action.payload)) {
        showToast("Withdrawal amount must be a valid number!", "error");
        return;
      }
      if (action.payload <= 0) {
        showToast("Withdrawal amount must be a positive number!", "error");
        return;
      }
      if (state.balance < action.payload) {
        showToast(
          `Insufficient balance! ${
            state.balance === 0 ? "" : `Max withdrawal: ${state.balance}$`
          }`,
          "error"
        );
        return;
      }

      state.balance -= action.payload;
      showToast(
        `Successfully withdrew $${action.payload.toFixed(2)}`,
        "success"
      );
    }
  }
});

export const selectInvestedCoins = createSelector(
  (state: RootState) => state.portfolio.holdings,
  (holdings) =>
    Object.values(holdings).map((holding) => ({
      ...holding.coin,
      amount: holding.amount,
      invested: holding.invested
    }))
);

export const {
  addCryptoCoin,
  removeCryptoCoin,
  depositBalance,
  withdrawBalance
} = portfolioSlice.actions;
export default portfolioSlice.reducer;
