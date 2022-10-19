import React, { useState } from "react";
import axios from "axios";
import "./Transfer.css";

const URL = "https://banking-system.onrender.com/customers/transfer";

const Transfer = () => {
  const [formData, setFormData] = useState({
    sender: "",
    reciever: "",
    amount: 0,
  });
  const [status, setStatus] = useState("");

  // function to handle the change happening in the input fields
  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  // function to handle submitting the transaction
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(URL, formData);
    setStatus(response.data.status);
    setFormData({
      sender: "",
      reciever: "",
      amount: 0,
    });
  };

  return (
    <div className="transfer">
      <form onSubmit={handleSubmit}>
        <caption>Transfer Data</caption>
        <input
          type="text"
          name="sender"
          value={formData.sender}
          onChange={handleChange}
          placeholder="sender's email"
        />
        <input
          type="text"
          name="reciever"
          value={formData.reciever}
          onChange={handleChange}
          placeholder="reciever's email"
        />
        <input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          placeholder="amount to transfer"
        />
        <button type="submit">Transfer</button>
        {status === "done" ? (
          <p className="done">Money transfered successfully</p>
        ) : status === "failed" ? (
          <p className="failed">Failed, please type valid emails</p>
        ) : status === "not_enough" ? (
          <p className="not-enough">Not enough balance</p>
        ) : (
          ""
        )}
      </form>
    </div>
  );
};

export default Transfer;
