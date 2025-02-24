import { Wallet, CircleDollarSign } from "lucide-react";

interface PortfolioInfoProps {
  balance: number;
  invested: number;
}

export default function PortfolioInfo({
  balance,
  invested
}: PortfolioInfoProps) {
  return (
    <div className={`portfolio-info`}>
      <div className="balance-info">
        <Wallet className="icon" />
        <div>
          Balance: <h3>${balance.toFixed(2)}</h3>
        </div>
      </div>
      <div className="invested-info">
        <CircleDollarSign className="icon" />
        <div>
          Invested: <h3>${invested.toFixed(2)}</h3>
        </div>
      </div>
    </div>
  );
}
