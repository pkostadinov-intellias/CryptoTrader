import { Wallet } from "lucide-react";

export default function Portfolio() {
  return (
    <>
      <div className="page-header">
        <h1>My Crypto Portfolio</h1>
        <div>
          <button style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <Wallet />
            Add Asset
          </button>
        </div>
      </div>
    </>
  );
}
