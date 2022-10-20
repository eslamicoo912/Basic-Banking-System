import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card/Card";
import "./Transactions.css";

const URL = "https://banking-system.onrender.com/customers/transfers";

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get(URL);
    const { data } = response;
    setTransactions(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const list = transactions.map((transaction, index) => {
    return <Card key={index} transaction={transaction} />;
  });

  if (loading) return <h1 className="loading">Loading ...</h1>;

  return (
    <table className="transactions">
      <thead>
        <tr>
          <th>Sender</th>
          <th>Reciever</th>
          <th>Amount</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>{list}</tbody>
    </table>
  );
};

export default Transactions;
