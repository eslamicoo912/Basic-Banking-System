import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="title">
        <h1>
          Basic <span>Banking</span> System
        </h1>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/customers">Customers</Link>
        <Link to="/transfer">Transfer</Link>
        <Link to="/Transactions">Transactions</Link>
      </div>
    </header>
  );
};

export default Header;
