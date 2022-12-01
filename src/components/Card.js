import { useState } from "react";
import "../styles/Card.css";

const Card = (props) => {
  return (
    <div className="card" onClick={() => props.registerHit(props.cardObj.id)}>
      <img src={props.cardObj.img} alt="Frog"></img>
      <p>{props.cardObj.text}</p>
    </div>
  );
};

export default Card;
