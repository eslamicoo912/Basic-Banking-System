import React from "react";
import Card from "./Card/Card";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
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
  );
};

export default Home;
