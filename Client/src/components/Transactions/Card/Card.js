import React from "react";

const Card = ({ transaction }) => {
  const { sender, reciever, amount, date } = transaction;
  return (
    <tr>
      <td>{sender}</td>
      <td>{reciever}</td>
      <td>{amount}</td>
      <td>{date}</td>
    </tr>
  );
};

export default Card;
