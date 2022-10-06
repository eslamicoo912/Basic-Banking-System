import React, { useEffect, useState } from "react";
import axios from "axios";

const URL = "http://localhost:5000/customers";

const Customers = () => {
  const [customers, setCustomers] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(URL);
    setCustomers(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div className="customers"></div>;
};

export default Customers;
