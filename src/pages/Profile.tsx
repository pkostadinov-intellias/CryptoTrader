import { usePortfolioSelector } from "../stores/hooks";
import PortfolioInfo from "../components/Portfolio/PortfolioInfo";
import BalanceActions from "../components/Profile/BalanceActions";

export default function Profile() {
  const portfolio = usePortfolioSelector();

  return (
    <>
      <div className="page-header">
        <h1>Profile</h1>
        <PortfolioInfo
          balance={portfolio.balance}
          invested={portfolio.invested}
        />
      </div>

      <BalanceActions />
    </>
  );
}
