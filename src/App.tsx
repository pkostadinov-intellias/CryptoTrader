import { Provider as ReduxProvider } from "react-redux";
import { store } from "./stores/store";
import "./index.css";
import Navbar from "./layout/Navbar";
import { BrowserRouter, Route, Routes } from "react-router";
import Dashboard from "./pages/Dashboard";
import Portfolio from "./pages/Portfolio";
import Profile from "./pages/Profile";
import { DialogProvider } from "./context/DialogContext";
import { ToastContainer } from "react-toastify";
import Reminder from "./components/shared/Reminder";

function App() {
  return (
    <>
      <ReduxProvider store={store}>
        <DialogProvider>
          <BrowserRouter>
            <div className="app">
              <div className="navbar-container">
                <Navbar />
              </div>
              <main className="container">
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
              </main>
            </div>
          </BrowserRouter>
          <ToastContainer />
        </DialogProvider>
      </ReduxProvider>
    </>
  );
}

export default App;
