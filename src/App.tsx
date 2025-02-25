import { Provider as ReduxProvider } from "react-redux";
import { store } from "./stores/store";
import "./index.css";
import Navbar from "./layout/Navbar";
import { BrowserRouter } from "react-router";
import { DialogProvider } from "./context/DialogContext";
import { ToastContainer } from "react-toastify";
import AppRoutes from "./layout/AppRoutes";

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
                <AppRoutes />
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
