import React from "react";

const Card = ({ customers }) => {
  return customers.map((customer, index) => {
    const { name, email, balance } = customer;
    return (
      <div key={index} className="card">
        <p>{name}</p>
        <p>{email}</p>
        <p>{balance}</p>
      </div>
    );
  });
};

export default Card;
