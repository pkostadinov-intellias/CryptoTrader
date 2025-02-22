import SearchInput from "../components/SearchInput";
import CryptoList from "../components/Crypto/CryptoList";
import { Suspense, useState } from "react";
import Loader from "../components/Loader";

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
      <Suspense fallback={<Loader />}>
        <CryptoList searchParams={searchParams} />
      </Suspense>
    </>
  );
}
