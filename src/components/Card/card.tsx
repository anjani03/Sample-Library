import React from "react";
import './card.css';

export interface CardProps {
  text: string;
}

const Card = (props: CardProps) => {
  return (
  <div className="card-style">{props.text}</div>
  );
};

export default Card;