import { Provider as ReduxProvider } from "react-redux";
import { store } from "./stores/store";
import "./index.css";
import Navbar from "./layout/Navbar";
import { BrowserRouter, Route, Routes } from "react-router";
import Dashboard from "./pages/Dashboard";
import Portfolio from "./pages/Portfolio";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <ReduxProvider store={store}>
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
              </Routes>
            </main>
          </div>
        </BrowserRouter>
      </ReduxProvider>
    </>
  );
}

export default App;
