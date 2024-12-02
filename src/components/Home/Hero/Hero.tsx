import "./Hero.css";
import Button from "../../Button/Button";
import { useHistory } from "react-router-dom";
import React, { FC } from "react";

const Hero: FC = () => {
  const history = useHistory();

  const handleNavigation = (): void => {
    history.push("/order");
  };

  return (
    <div className="hero">
      <div className="hero-container">
        <p id="deal">Fırsatı kaçırma</p>
        <div className="hero-main">
          <p>Kod Acıktırır</p>
          <p>Pizza, Doyurur</p>
        </div>
        <Button className="hero-button" onClick={handleNavigation}>
          Acıktım
        </Button>
      </div>
    </div>
  );
};

export default Hero;
