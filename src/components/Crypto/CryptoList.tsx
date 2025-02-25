import CryptoCard from "./CryptoCard";
import { filterCoins } from "../../utils/filterCoins";
import { Crypto } from "../../types/crypto";
import { useDialog } from "../../context/DialogContext";

interface CryptoListProps {
  coins: Crypto[] | undefined;
  searchParams?: string;
}

export default function CryptoList({ searchParams, coins }: CryptoListProps) {
  const filteredCoins = filterCoins(coins, searchParams);
  const { openDialog } = useDialog();

  return (
    <div className="crypto-container">
      {filteredCoins.map((coin) => (
        <div className="crypto-card" onClick={() => openDialog(coin)}>
          <CryptoCard key={coin.id} coin={coin} />
        </div>
      ))}
    </div>
  );
}
