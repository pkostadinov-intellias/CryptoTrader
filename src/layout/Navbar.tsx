import { Wallet, LineChart, User } from "lucide-react";
import { Link, useLocation } from "react-router";

export default function Navbar() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">
        <h3 className="logo">
          <LineChart className="icon" />
          CryptoTrader
        </h3>
      </Link>

      <ul>
        <Link to="/" className="nav-link">
          <li className={isActive("/") ? "active" : ""}>
            <LineChart className="icon" />
            Dashboard
          </li>
        </Link>

        <Link to="/portfolio" className="nav-link">
          <li className={isActive("/portfolio") ? "active" : ""}>
            <Wallet className="icon" />
            Portfolio
          </li>
        </Link>
        <Link to="/profile" className="nav-link">
          <li className={isActive("/profile") ? "active" : ""}>
            <User className="icon" />
            Profile
          </li>
        </Link>
      </ul>
    </nav>
  );
}
