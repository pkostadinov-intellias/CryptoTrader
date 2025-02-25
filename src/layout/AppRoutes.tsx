import { Routes, Route } from "react-router";
import Dashboard from "../pages/Dashboard";
import Portfolio from "../pages/Portfolio";
import Profile from "../pages/Profile";
import Reminder from "../components/shared/Reminder";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/profile" element={<Profile />} />
      <Route
        path="*"
        element={
          <Reminder
            condition={true}
            message="404 - This page is missing. Go to"
            linkText="Dashboard"
            linkPath="/"
          />
        }
      />
    </Routes>
  );
};

export default AppRoutes;
