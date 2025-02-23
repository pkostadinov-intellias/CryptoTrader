import SearchInput from "../components/SearchInput";
import CryptoList from "../components/Crypto/CryptoList";
import { useState } from "react";
import CryptoDialog from "../components/Crypto/CryptoDialog";

export default function Dashboard() {
  const [searchParams, setSearchParams] = useState<string>("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams(e.target.value);
  };

  return (
    <>
      <div className="page-header">
        <h1>Cryptocurrency Dashboard</h1>
        <SearchInput onChange={handleSearch} />
      </div>
      <CryptoList searchParams={searchParams} />
      <CryptoDialog />
    </>
  );
}
