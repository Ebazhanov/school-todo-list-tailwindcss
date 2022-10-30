import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Home } from "./сomponents/Home";
import { Layout } from "./сomponents/layout/Layout";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Layout>
      <Home />
    </Layout>
  </React.StrictMode>
);
