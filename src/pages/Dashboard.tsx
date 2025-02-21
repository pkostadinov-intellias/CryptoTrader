import SearchInput from "../components/SearchInput";
import { useGetAllCoinsQuery } from "../services/cryptoApi";

export default function Dashboard() {
  const { data: coins, error, isLoading } = useGetAllCoinsQuery();

  if (isLoading) return <div>loading...</div>;
  if (error) return <div>error</div>;

  return (
    <>
      <div className="page-header">
        <h1>Cryptocurrency Dashboard</h1>
        <SearchInput />
      </div>
      <div>
        <ul>
          {coins?.map((coin) => (
            <li
              key={coin.id}
              style={{ display: "flex", alignItems: "center", gap: "10px" }}
            >
              <img src={coin.image} alt={coin.name} width="30" />
              <div>
                <strong>
                  {coin.name} ({coin.symbol})
                </strong>{" "}
                - ${coin.price.toLocaleString()}
                <p>Market Cap Rank: #{coin.marketCapRank}</p>
                <p>
                  24h Change: ${coin.priceChange24h.toFixed(2)} (
                  {coin.priceChangePercentage24h.toFixed(2)}%)
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
