import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card/Card";
import "./Customers.css";

const URL = "https://banking-system.onrender.com/customers";

const Customers = () => {
  const [customers, setCustomers] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(URL);
    setCustomers(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const list = customers.map((customer, index) => {
    return <Card key={index} customer={customer} />;
  });

  return (
    <table className="customers">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Balance</th>
          <th>More</th>
        </tr>
      </thead>
      <tbody>{list}</tbody>
    </table>
  );
};

export default Customers;
