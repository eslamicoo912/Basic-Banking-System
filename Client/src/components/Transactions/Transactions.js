import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card/Card";
import "./Transactions.css";

const URL = "https://banking-system.onrender.com/customers/transfers";

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(URL);
    const { data } = response;
    setTransactions(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const list = transactions.map((transaction, index) => {
    return <Card key={index} transaction={transaction} />;
  });

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
