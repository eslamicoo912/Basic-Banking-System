import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { BsBank2 } from "react-icons/bs";

const Header = () => {
  const [active, setActive] = useState("/home");
  useEffect(() => {
    setActive(window.location.pathname);
  }, [active]);
  return (
    <header>
      <div className="title">
        <h1>
          es<span>MONEY</span>
        </h1>
        <BsBank2 className="icon" />
      </div>
      <div className="links">
        <Link
          className={active === "/home" ? "active" : ""}
          to="/"
          onClick={() => setActive("home")}
        >
          Home
        </Link>
        <Link
          className={active === "/customers" ? "active" : ""}
          to="/customers"
          onClick={() => setActive("customers")}
        >
          Customers
        </Link>
        <Link
          className={active === "/transfer" ? "active" : ""}
          to="/transfer"
          onClick={() => setActive("transfer")}
        >
          Transfer
        </Link>
        <Link
          className={active === "/transfers" ? "active" : ""}
          to="/transfers"
          onClick={() => setActive("transfers")}
        >
          Transactions
        </Link>
      </div>
    </header>
  );
};

export default Header;
