import SearchInput from "../components/SearchInput";
import CryptoList from "../components/Crypto/CryptoList";
import { useState } from "react";
import CryptoDialog from "../components/Crypto/CryptoDialog";
import { useGetAllCoinsQuery } from "../services/cryptoApi";
import Loader from "../components/Loader";

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
        <SearchInput onChange={(e) => setSearchParams(e.target.value)} />
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
