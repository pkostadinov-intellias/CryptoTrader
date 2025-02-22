import CryptoCard from "./CryptoCard";
import { useGetAllCoinsQuery } from "../services/cryptoApi";
import Loader from "./Loader";

export default function CryptoList() {
  const { data: coins, error, isLoading } = useGetAllCoinsQuery();

  if (isLoading) return <Loader />;

  return (
    <div className="crypto-container">
      {!error ? (
        coins?.map((coin) => <CryptoCard key={coin.id} coin={coin} />)
      ) : (
        <h1>
          We've encountered an issue with crypto data. Please try again later.
        </h1>
      )}
    </div>
  );
}
