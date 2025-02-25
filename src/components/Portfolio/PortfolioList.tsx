import { filterCoins } from "../../utils/filterCoins";
import { Crypto } from "../../types/crypto";
import Reminder from "../shared/Reminder";
import PortfolioCard from "./PortfolioCard";
import { usePortfolioSelector } from "../../stores/hooks";

interface PortfolioListProps {
  coins: Crypto[] | undefined;
  searchParams?: string;
}

export default function PortfolioList({
  searchParams,
  coins
}: PortfolioListProps) {
  const filteredCoins = filterCoins(coins, searchParams);
  const { holdings } = usePortfolioSelector();

  return (
    <>
      {coins!.length > 0 ? (
        <div className="crypto-container">
          {filteredCoins.map((coin) => (
            <PortfolioCard
              key={coin.id}
              coin={coin}
              amount={holdings[coin.id].amount}
              invested={holdings[coin.id].invested}
            />
          ))}
        </div>
      ) : (
        <Reminder
          condition={true}
          message="You have no crypto holdings. Start trading now in"
          linkText="Dashboard"
          linkPath="/"
        />
      )}
    </>
  );
}
