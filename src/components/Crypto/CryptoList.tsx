import CryptoCard from "./CryptoCard";
import { filterCoins } from "../../utils/filterCoins";
import { Crypto } from "../../types/crypto";

interface CryptoListProps {
  coins: Crypto[] | undefined;
  searchParams?: string;
}

export default function CryptoList({ searchParams, coins }: CryptoListProps) {
  const filteredCoins = filterCoins(coins, searchParams);

  return (
    <div className="crypto-container">
      {filteredCoins.map((coin) => (
        <CryptoCard key={coin.id} coin={coin} />
      ))}
    </div>
  );
}
