import { Crypto } from "../types/crypto";

export const filterCoins = (
  coins: Crypto[] | undefined,
  searchParams: string
): Crypto[] => {
  if (!coins) return [];

  if (!searchParams) return coins;

  return coins.filter((coin) =>
    coin.name.toLowerCase().includes(searchParams.toLowerCase())
  );
};
