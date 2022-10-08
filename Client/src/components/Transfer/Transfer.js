import React, { useState } from "react";
import axios from "axios";

const URL = "http://localhost:5000/customers/transfer";

const Transfer = () => {
  const [formData, setFormData] = useState({
    sender: "eslamicoo912@yahoo.com",
    reciever: "ahmed10@yahoo.com",
    amount: 6165,
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(URL, formData);
    setStatus(response.data.status);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
          <p className="done">Money Transfered Successfully</p>
        ) : status === "failed" ? (
          <p className="failed">Failed, please type valid emails</p>
        ) : (
          ""
        )}
      </form>
    </div>
  );
};

export default Transfer;
