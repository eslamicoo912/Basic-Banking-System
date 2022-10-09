import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ title, desc, linkTitle, linkRoute }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{desc}</p>
      <Link to={linkRoute}>{linkTitle}</Link>
    </div>
  );
};

export default Card;
