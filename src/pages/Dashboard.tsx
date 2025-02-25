import CryptoList from "../components/Crypto/CryptoList";
import { useState } from "react";
import CryptoDialog from "../components/Crypto/CryptoDialog";
import { useGetAllCoinsQuery } from "../services/cryptoApi";
import Loader from "../components/shared/Loader";
import TextField from "../components/shared/TextField";
import PortfolioInfo from "../components/Portfolio/PortfolioInfo";

export default function Dashboard() {
  const { data: coins, error, isLoading } = useGetAllCoinsQuery();
  const [searchParams, setSearchParams] = useState<string>("");

  if (error) {
    return (
      <h1>
        We've encountered an issue with crypto data. Please try again later.
      </h1>
    );
  }

  return (
    <>
      <div className="page-header">
        <h1>Cryptocurrency Dashboard</h1>
        <TextField
          placeholder="Search name..."
          onChange={(e) => setSearchParams(e.target.value)}
        />
        <PortfolioInfo />
      </div>

      {isLoading ? (
        <Loader />
      ) : (
        <CryptoList searchParams={searchParams} coins={coins} />
      )}

      <CryptoDialog />
    </>
  );
}
