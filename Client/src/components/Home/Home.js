import React from "react";
import Card from "./Card/Card";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home-title">
        <h1>
          Basic <span>Banking</span> System
        </h1>
      </div>
      <div className="home-cards">
        <Card
          title="Customers"
          desc="view all our customers' data"
          linkTitle="Customers"
          linkRoute="/customers"
        />
        <Card
          title="Transfer"
          desc="transfer money from customer to another"
          linkTitle="Trasnfer"
          linkRoute="/transfer"
        />
        <Card
          title="Transactions"
          desc="view all our transactions' data"
          linkTitle="Transaction"
          linkRoute="/transfers"
        />
      </div>
    </div>
  );
};

export default Home;
