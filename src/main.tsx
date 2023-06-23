import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { PersistGate } from "redux-persist/integration/react";
import { CssBaseline } from "@mui/material";
import { Provider } from "react-redux";
import { persistor, store } from "./store/";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<h1>Aguarde...</h1>} persistor={persistor}>
        <CssBaseline />
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
