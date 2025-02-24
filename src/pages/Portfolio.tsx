import { CircleDollarSign, Wallet } from "lucide-react";
import CryptoList from "../components/Crypto/CryptoList";
import { useAppSelector, usePortfolioSelector } from "../stores/hooks";
import CryptoDialog from "../components/Crypto/CryptoDialog";
import { selectInvestedCoins } from "../stores/portfolioSlice";

export default function Portfolio() {
  const portfolio = usePortfolioSelector();
  const investedCoins = useAppSelector(selectInvestedCoins);

  return (
    <>
      <div className="page-header">
        <h1>My Crypto Portfolio</h1>
        <div className="portfolio-info">
          <div className="balance-info">
            <Wallet className="icon" />
            <h3>Balance: ${portfolio.balance.toFixed(2)}</h3>
          </div>
          <div className="invested-info">
            <CircleDollarSign className="icon" />
            <h3>Invested: ${portfolio.invested.toFixed(2)}</h3>
          </div>
        </div>
      </div>

      <CryptoList coins={investedCoins} />

      <CryptoDialog />
    </>
  );
}
