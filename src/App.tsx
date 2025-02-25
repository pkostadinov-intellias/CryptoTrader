import { Provider as ReduxProvider } from "react-redux";
import { persistor, store } from "./stores/store";
import "./index.css";
import Navbar from "./layout/Navbar";
import { BrowserRouter } from "react-router";
import { DialogProvider } from "./context/DialogContext";
import { ToastContainer } from "react-toastify";
import AppRoutes from "./layout/AppRoutes";
import { PersistGate } from "redux-persist/integration/react";
import Loader from "./components/shared/Loader";

function App() {
  return (
    <>
      <ReduxProvider store={store}>
        <PersistGate loading={<Loader />} persistor={persistor}>
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
        </PersistGate>
      </ReduxProvider>
    </>
  );
}

export default App;
