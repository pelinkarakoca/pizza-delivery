import "./CuisineList.css";

export default function CuisineList({ cuisines }) {
  console.log(cuisines);
  return (
    <div className="cuisine-container">
      <ul className="cuisine-list">
        {cuisines.map((cuisine) => (
          <li key={cuisine.cuisineName} className="cuisine-item">
            <img src={cuisine.img} alt={cuisine.cuisineName} />
            {cuisine.cuisineName}
          </li>
        ))}
      </ul>
    </div>
  );
}
