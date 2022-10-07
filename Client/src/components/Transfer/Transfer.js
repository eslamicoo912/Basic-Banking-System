import React, { useState } from "react";

const Transfer = () => {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    amount: 0,
  });

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="from"
          value={formData.from}
          onChange={handleChange}
          placeholder="sender's email"
        />
        <input
          type="text"
          name="to"
          value={formData.to}
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
      </form>
    </div>
  );
};

export default Transfer;
