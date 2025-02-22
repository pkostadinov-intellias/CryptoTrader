import SearchInput from "../components/SearchInput";
import { useGetAllCoinsQuery } from "../services/cryptoApi";
import CryptoCard from "../components/CryptoCard";

export default function Dashboard() {
  const { data: coins, error, isLoading } = useGetAllCoinsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <>
      <div className="page-header">
        <h1>Cryptocurrency Dashboard</h1>
        <SearchInput />
      </div>
      <div className="crypto-container">
        {coins?.map((coin) => (
          <CryptoCard key={coin.id} coin={coin} />
        ))}
      </div>
    </>
  );
}
