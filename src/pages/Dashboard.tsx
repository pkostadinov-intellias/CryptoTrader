import SearchInput from "../components/SearchInput";
import CryptoList from "../components/CryptoList";
import { Suspense } from "react";
import Loader from "../components/Loader";

export default function Dashboard() {
  return (
    <>
      <div className="page-header">
        <h1>Cryptocurrency Dashboard</h1>
        <SearchInput />
      </div>
      <Suspense fallback={<Loader />}>
        <CryptoList />
      </Suspense>
    </>
  );
}
