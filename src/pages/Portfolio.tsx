import CryptoList from "../components/Crypto/CryptoList";
import { useAppSelector, usePortfolioSelector } from "../stores/hooks";
import CryptoDialog from "../components/Crypto/CryptoDialog";
import { selectInvestedCoins } from "../stores/portfolioSlice";
import { Link } from "react-router";
import PortfolioInfo from "../components/Portfolio/PortfolioInfo";

export default function Portfolio() {
  const portfolio = usePortfolioSelector();
  const investedCoins = useAppSelector(selectInvestedCoins);

  const renderLowBalance = () => {
    return (
      portfolio.balance === 0 && (
        <h2 style={{ margin: 20 }}>
          Your balance is low. Deposit more funds in{" "}
          <Link
            style={{ textDecoration: "none", color: "#22c55e" }}
            to="/profile"
          >
            Profile.
          </Link>
        </h2>
      )
    );
  };

  return (
    <>
      <div className="page-header">
        <h1>My Crypto Portfolio</h1>
        <PortfolioInfo
          balance={portfolio.balance}
          invested={portfolio.invested}
        />
      </div>
      {renderLowBalance()}
      <CryptoList coins={investedCoins} />
      <CryptoDialog />
    </>
  );
}
