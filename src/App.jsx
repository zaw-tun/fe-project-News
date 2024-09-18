import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Home } from "./components/Home";
import { Header } from "./components/Header";
import { ArticleById } from "./components/ArticleById";
import { User } from "./components/User";

import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles/:article_id" element={<ArticleById />} />
        <Route path="/user" element={<User />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
