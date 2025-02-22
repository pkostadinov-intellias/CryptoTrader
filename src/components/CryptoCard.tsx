import React from "react";
import { Crypto } from "../types/crypto";

const CryptoCard: React.FC<{ coin: Crypto }> = ({ coin }) => {
  return (
    <div className="crypto-card">
      <img src={coin.image} alt={coin.name} className="crypto-image" />
      <div className="crypto-info">
        <h3>
          {coin.name} ({coin.symbol})
        </h3>
        <p className="crypto-price">${coin.price.toLocaleString()}</p>
        <p className="crypto-rank">Market Cap Rank: #{coin.marketCapRank}</p>
        <p className="crypto-change">
          24h Change:{" "}
          <span className={coin.priceChange24h >= 0 ? "positive" : "negative"}>
            ${coin.priceChange24h.toFixed(2)} (
            {coin.priceChangePercentage24h.toFixed(2)}%)
          </span>
        </p>
      </div>
    </div>
  );
};

export default CryptoCard;
