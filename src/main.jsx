import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ArticleProvider } from "./contexts/ArticleContext.jsx";
import App from "./App.jsx";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ArticleProvider>
      <App />
    </ArticleProvider>
  </BrowserRouter>
);
