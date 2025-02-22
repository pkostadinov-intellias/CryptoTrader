import CryptoCard from "./CryptoCard";
import { useGetAllCoinsQuery } from "../services/cryptoApi";
import Loader from "./Loader";
import { filterCoins } from "../utils/filterCoins";

interface CryptoListProps {
  searchParams?: string;
}

export default function CryptoList({ searchParams = "" }: CryptoListProps) {
  const { data: coins, error, isLoading } = useGetAllCoinsQuery();

  if (isLoading) return <Loader />;
  if (error)
    return (
      <h1>
        We've encountered an issue with crypto data. Please try again later.
      </h1>
    );

  const filteredCoins = filterCoins(coins, searchParams);

  return (
    <div className="crypto-container">
      {filteredCoins.length > 0 ? (
        filteredCoins.map((coin) => <CryptoCard key={coin.id} coin={coin} />)
      ) : (
        <h2>No cryptocurrencies found matching "{searchParams}"</h2>
      )}
    </div>
  );
}
