import CryptoCard from "./CryptoCard";
import { filterCoins } from "../../utils/filterCoins";
import { Crypto } from "../../types/crypto";
import Reminder from "../shared/Reminder";

interface CryptoListProps {
  coins: Crypto[] | undefined;
  searchParams?: string;
}

export default function CryptoList({ searchParams, coins }: CryptoListProps) {
  const filteredCoins = filterCoins(coins, searchParams);

  return (
    <>
      {coins!.length > 0 ? (
        <div className="crypto-container">
          {filteredCoins.map((coin) => (
            <CryptoCard key={coin.id} coin={coin} />
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
