import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Header } from "./components/Header";
import Footer from './components/Footer';
// ... existing code ...

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Header title="Administer Your User Base" />
    <App />
    <Footer />
  </React.StrictMode>
);
