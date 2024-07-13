import "./Hero.css";
import Button from "../Button";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-container">
        <p id="deal">Fırsatı kaçırma</p>
        <div className="hero-main">
          <p>Kod Acıktırır</p>
          <p>Pizza, Doyurur</p>
        </div>
        <Button className="hero-button">Acıktım</Button>
      </div>
    </div>
  );
}
