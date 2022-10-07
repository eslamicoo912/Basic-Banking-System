import React from "react";
import "./Card.css";

const Card = ({ customer }) => {
  const { name, email, balance } = customer;
  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{balance}</td>
    </tr>
  );
};

export default Card;
