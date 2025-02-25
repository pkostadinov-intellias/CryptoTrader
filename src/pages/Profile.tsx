import PortfolioInfo from "../components/Portfolio/PortfolioInfo";
import BalanceActions from "../components/Profile/BalanceActions";

export default function Profile() {
  return (
    <>
      <div className="page-header">
        <h1>Profile</h1>
        <PortfolioInfo />
      </div>

      <BalanceActions />
    </>
  );
}
