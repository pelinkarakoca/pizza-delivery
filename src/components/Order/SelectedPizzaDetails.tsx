export default function SelectedPizzaDetails({ pizza }) {
  return (
    <div className="order-pizza">
      {" "}
      <h2>{pizza.name}</h2>
      <div className="order-pizza-description">
        <h1>
          {" "}
          <strong>{pizza.price}</strong>
        </h1>
        <div className="order-pizza-review">
          <span>{pizza.rate}</span>
          <span>({pizza.comments})</span>
        </div>
      </div>
      <p>{pizza.description}</p>
    </div>
  );
}
