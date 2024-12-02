import React, { FC } from "react";
import Card from "./Card";
import "./Cards.css";

const Cards: FC = () => {
  return (
    <div className="card-container">
      <Card
        className="card-item"
        img="../../../Assets/mile2-assets/pictures/food-1.png"
        text="Terminal Pizza"
      />
      <Card
        className="card-item"
        img="../../../Assets/mile2-assets/pictures/food-2.png"
        text="Position Absolute Acı Pizza"
      />
      <Card
        className="card-item"
        img="../../../Assets/mile2-assets/pictures/food-3.png"
        text="useEffect Tavuklu Burger"
      />
    </div>
  );
};

export default Cards;
