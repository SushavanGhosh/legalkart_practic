import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import TalkToLawyer from "./pages/TalkToLawyer";
import Product from "./pages/Product";
import Layout from "./Layout";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/talktolawyer" element={<TalkToLawyer />} />
          <Route path="/product" element={<Product />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
