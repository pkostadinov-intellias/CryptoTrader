import React from "react";
import { Crypto } from "../../types/crypto";
import { useDialog } from "../../context/DialogContext";
import CryptoCard from "../Crypto/CryptoCard";

interface PortfolioCardProps {
  coin: Crypto;
  invested: number;
  amount: number;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  coin,
  invested,
  amount
}) => {
  const { openDialog } = useDialog();

  return (
    <div className="crypto-card" onClick={() => openDialog(coin)}>
      <CryptoCard coin={coin} />
      <div className="holdings-info">
        <div className="holding">
          <p>Your Holdings</p>
          <h2>${invested.toLocaleString()}</h2>
        </div>
        <div className="amount">
          <p>Holding Amount</p>
          <h2>
            {amount} {coin.symbol}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
