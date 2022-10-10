import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = ({ customer }) => {
  const { name, email, balance } = customer;
  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{balance}</td>
      <td>
        <Link to={`/customers/${email}`}>Read More</Link>
      </td>
    </tr>
  );
};

export default Card;
