import Hero from "./Hero";
import CuisineList from "./CuisineList";
import FoodDeals from "./FoodDeals";
import TopRatedMenus from "./TopRatedMenus";
import Cards from "./Cards";
import "./Home.css";

export default function Home({ cuisines, deals }) {
  return (
    <div className="home-container">
      <Hero />
      <CuisineList cuisines={cuisines} />
      <FoodDeals deals={deals} />
      <TopRatedMenus cuisines={cuisines} />
      <Cards />
    </div>
  );
}
