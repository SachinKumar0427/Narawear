import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import UserContextProvider from "./store/UserContextProvider.jsx";
  //  use for AddTocart items
import { userContext } from "./store/UserContextProvider.jsx";
createRoot(document.getElementById("root")).render(
  <UserContextProvider store={userContext}>
    <App />
  </UserContextProvider>
);
