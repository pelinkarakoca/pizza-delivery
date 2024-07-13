import Hero from "./Hero";
import CuisineList from "./CuisineList";
import FoodDeals from "./FoodDeals";
import "./Home.css";

export default function Home({ cuisines }) {
  return (
    <div className="home-container">
      <Hero />
      <CuisineList cuisines={cuisines} />
      <FoodDeals />
    </div>
  );
}
