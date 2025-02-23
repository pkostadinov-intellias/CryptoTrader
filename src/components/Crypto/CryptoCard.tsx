import React from "react";
import { Crypto } from "../../types/crypto";
import { useDialog } from "../../context/DialogContext";
import { TrendingDown, TrendingUp } from "lucide-react";

interface CryptoCardProps {
  coin: Crypto;
}

const CryptoCard: React.FC<CryptoCardProps> = ({ coin }) => {
  const { openDialog } = useDialog();

  return (
    <div className="crypto-card" onClick={() => openDialog(coin)}>
      <div className="crypto-info">
        <img src={coin.image} alt={coin.name} className="crypto-image" />
        <div>
          <h2>{coin.name}</h2>
          <p>{coin.symbol}</p>
        </div>
      </div>
      <div className="crypto-market-info">
        <h2>${coin.price.toLocaleString()}</h2>
        <h3
          className={`crypto-change ${
            coin.priceChange24h >= 0 ? "positive" : "negative"
          }`}
        >
          {coin.priceChange24h >= 0 ? <TrendingUp /> : <TrendingDown />}
          {coin.priceChangePercentage24h.toFixed(2)}%
        </h3>
      </div>
    </div>
  );
};

export default CryptoCard;
