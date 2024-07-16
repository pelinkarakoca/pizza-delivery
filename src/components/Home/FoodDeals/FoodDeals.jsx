import Button from "../../Button/Button";
import "./FoodDeals.css";

export default function FoodDeals({ deals }) {
  return (
    <div className="deal-container">
      <div
        style={{
          backgroundImage: `url(${deals[0].img})`,
          backgroundSize: "cover",
        }}
        className="top-deal"
      >
        <h3>{deals[0].campaign}</h3>
        <p>{deals[0].name}</p>
        <Button className="deal-button">SİPARİŞ VER</Button>
      </div>
      <div className="other-deals">
        <div
          className="deal-item"
          style={{
            backgroundImage: `url(${deals[1].img})`,
            backgroundSize: "cover",
          }}
        >
          <h3>{deals[1].campaign}</h3>
          <p>{deals[1].name}</p>
          <Button className="deal-button">SİPARİŞ VER</Button>
        </div>
        <div
          className="deal-item"
          style={{
            backgroundImage: `url(${deals[2].img})`,
            backgroundSize: "cover",
          }}
        >
          <h3>{deals[2].campaign}</h3>
          <p>{deals[2].name}</p>
          <Button className="deal-button">SİPARİŞ VER</Button>
        </div>
      </div>
    </div>
  );
}
