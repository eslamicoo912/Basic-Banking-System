import React, { useEffect, useState } from "react";
import "./SingleCustomer.css";
import axios from "axios";

const URL = "http://localhost:5000";

const SingleCustomer = () => {
  const [custData, setCusData] = useState({});

  const fetchData = async () => {
    const response = await axios.get(`${URL}${window.location.pathname}`);
    const { data } = response;
    setCusData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div className="single-customer"></div>;
};

export default SingleCustomer;
