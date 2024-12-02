import React, { FC } from "react";

interface CardProps {
  className: string;
  img: string;
  text: string;
}

const Card: FC<CardProps> = ({ className, img, text }) => {
  return (
    <li className={className}>
      <img src={img} alt={img} />
      <p>
        <strong>{text}</strong>
      </p>
      <div className="card-detail">
        <span>4.9</span>
        <span>(200)</span>
        <span>
          <strong>60₺</strong>
        </span>
      </div>
    </li>
  );
};

export default Card;
