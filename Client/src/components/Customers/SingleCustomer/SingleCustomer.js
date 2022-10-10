import React, { useEffect, useState } from "react";
import "./SingleCustomer.css";
import axios from "axios";
import logo from "./logo.jpg";
import Card from "../../Transactions/Card/Card";

const URL = "http://localhost:5000";

const SingleCustomer = () => {
  const [custData, setCusData] = useState({});
  const [transfers, setTransfers] = useState([]);

  const fetchData = async () => {
    // get customer data
    const responseData = await axios.get(`${URL}${window.location.pathname}`);
    const { data } = responseData;
    setCusData(data);
  };

  const fetchTransfers = async () => {
    // get customer transfers
    const response = await axios.get(`${URL}/customers/transfers`);
    const { data } = response;
    setTransfers(data);
  };

  useEffect(() => {
    fetchData();
    fetchTransfers();
  }, []);

  const list = transfers
    .filter((transfer) => {
      return (
        transfer.sender === custData.email ||
        transfer.reciever === custData.email
      );
    })
    .map((transfer, index) => {
      return <Card key={index} transaction={transfer} />;
    });

  return (
    <div className="single-customer">
      <div className="customer-card">
        <img src={logo} alt="logo" />
        <h3>{custData.name}</h3>
        <div className="footer">
          <p>{custData.email}</p>
          <p>{custData.balance}</p>
        </div>
      </div>
      <div className="customer-transactions">
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
      </div>
    </div>
  );
};

export default SingleCustomer;
