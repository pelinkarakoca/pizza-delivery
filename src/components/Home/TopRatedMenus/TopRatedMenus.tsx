import "./TopRatedMenus.css";
import Button from "../../Button/Button";
import React, { FC } from "react";

interface Cuisine {
  cuisineName: string;
  img: string;
}

interface TopRatedMenusProps {
  cuisines: Cuisine[];
}

const TopRatedMenus: FC<TopRatedMenusProps> = ({ cuisines }) => {
  return (
    <div className="top-rated-container">
      <div>
        <p id="emphasis">En çok paketlenen menüler</p>
        <p className="top-rated-main">Acıktıran Kodlara Doyuran Lezzetler</p>
      </div>
      <div className="top-rated-buttons-container">
        {cuisines.map((cuisine) => (
          <Button className="top-rated-button" key={cuisine.cuisineName}>
            <div className="top-rated-button-description">
              <img src={cuisine.img} alt={cuisine.cuisineName} />
              <p>{cuisine.cuisineName}</p>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default TopRatedMenus;
