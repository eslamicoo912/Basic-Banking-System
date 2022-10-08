import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { BsBank2 } from "react-icons/bs";

const Header = () => {
  return (
    <header>
      <div className="title">
        <h1>
          Basic <span>Banking System</span>
        </h1>
        <BsBank2 className="icon" />
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
