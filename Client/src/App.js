import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Customers from "./components/Customers/Customers";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Transfer from "./components/Transfer/Transfer";
import Transactions from "./components/Transactions/Transactions";
import SingleCustomer from "./components/Customers/SingleCustomer/SingleCustomer";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/transfer" element={<Transfer />} />
          <Route path="/transfers" element={<Transactions />} />
          <Route path="customers/:email" element={<SingleCustomer />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
