import React, { useEffect, useState } from "react";
import "./SingleCustomer.css";
import axios from "axios";
import logo from "./logo.jpg";
import Card from "../../Transactions/Card/Card";
import { AiOutlineMail } from "react-icons/ai";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { BsFilePersonFill } from "react-icons/bs";

const URL = "https://banking-system.onrender.com/";

const SingleCustomer = () => {
  const [custData, setCusData] = useState({});
  const [transfers, setTransfers] = useState([]);

  const fetchData = async () => {
    // get customer data
    const responseData = await axios.get(
      `${URL}/customers/${window.location.pathname}`
    );
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
    // filtering the transfers that belongs to this customer
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
        <BsFilePersonFill className="logo" />
        <h3>{custData.name}</h3>
        <div className="footer">
          <div className="container">
            <AiOutlineMail className="icon email-icon" />
            <p>{custData.email}</p>{" "}
          </div>
          <div className="container">
            <RiMoneyDollarCircleLine className="icon balance-icon" />{" "}
            <p>{custData.balance}</p>{" "}
          </div>
        </div>
      </div>
      {list.length ? (
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
      ) : (
        <h1>This Customer Has No Transactions</h1>
      )}
    </div>
  );
};

export default SingleCustomer;
