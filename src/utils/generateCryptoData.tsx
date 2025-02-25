import dayjs from "dayjs";
import { CryptoChartData } from "../types/crypto";

export const generateCryptoChartData = (
  startPrice: number | undefined
): CryptoChartData[] => {
  let price = startPrice ?? 5000; // Default to 5000 if startPrice is undefined

  return Array.from({ length: 30 }, (_, i): CryptoChartData => {
    const fluctuation = price * (Math.random() * 0.05 - 0.025); // ±2.5%
    price += fluctuation;

    return {
      date: dayjs()
        .subtract(29 - i, "day")
        .format("MMM DD"),
      price: parseFloat(price.toFixed(2))
    };
  });
};
