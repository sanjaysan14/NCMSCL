import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Stylesheets/Gallary.css";
import GI1 from "../Images/GI1.png";
import GI2 from "../Images/GI2.png";
import GI3 from "../Images/GI3.png";
import GI4 from "../Images/GI4.png";
import GI5 from "../Images/GI5.png";
import GI6 from "../Images/GI6.png";

const Gallary = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate(); // Hook for navigation

  // Function to handle category selection
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  // Function to navigate to GallaryPage component
  const handleExploreMoreClick = () => {
    navigate("/gallery");
  };

  // Content for each category
  const categoryContent1 = {
    All: [
      { id: 1, image: GI1, caption: "Volley Ball" },
      { id: 2, image: GI2, caption: "Riley" },
      { id: 3, image: GI3, caption: "Chess" },
      { id: 4, image: GI4, caption: "Cricket" },
      { id: 5, image: GI5, caption: "Table Tennis" },
      { id: 6, image: GI6, caption: "Volley Ball" },
    ],
    Inauguration: [
      { id: 1, image: GI1, caption: "Volley Ball" },
      { id: 2, image: GI2, caption: "Riley" },
    ],
    "Indoor Games": [
      { id: 1, image: GI1, caption: "Volley Ball" },
      { id: 2, image: GI2, caption: "Riley" },
      { id: 3, image: GI3, caption: "Chess" },
    ],
    "Outdoor Games": [
      { id: 1, image: GI1, caption: "Volley Ball" },
      { id: 2, image: GI2, caption: "Riley" },
      { id: 3, image: GI3, caption: "Chess" },
      { id: 4, image: GI4, caption: "Cricket" },
      { id: 5, image: GI5, caption: "Table Tennis" },
      { id: 6, image: GI6, caption: "Volley Ball" },
    ],
    Teams: [
      { id: 1, image: GI1, caption: "Volley Ball" },
      { id: 2, image: GI2, caption: "Riley" },
      { id: 3, image: GI3, caption: "Chess" },
      { id: 4, image: GI4, caption: "Cricket" },
      { id: 5, image: GI5, caption: "Table Tennis" },
      { id: 6, image: GI6, caption: "Volley Ball" },
    ],
  };

  return (
    <div className="grid_container1">
      <h1 className="Gallary_Head">Gallery</h1>
      <div>
        <ul className="Gallary_List">
          <li
            className={selectedCategory === "All" ? "active" : ""}
            onClick={() => handleCategoryClick("All")}
          >
            All
          </li>
          <li
            className={selectedCategory === "Inauguration" ? "active" : ""}
            onClick={() => handleCategoryClick("Inauguration")}
          >
            Inauguration
          </li>
          <li
            className={selectedCategory === "Indoor Games" ? "active" : ""}
            onClick={() => handleCategoryClick("Indoor Games")}
          >
            Indoor Games
          </li>
          <li
            className={selectedCategory === "Outdoor Games" ? "active" : ""}
            onClick={() => handleCategoryClick("Outdoor Games")}
          >
            Outdoor Games
          </li>
          <li
            className={selectedCategory === "Teams" ? "active" : ""}
            onClick={() => handleCategoryClick("Teams")}
          >
            Teams
          </li>
          <li onClick={handleExploreMoreClick}>Explore More</li>
        </ul>
      </div>
      <div className="gallery">
        {categoryContent1[selectedCategory].map((item) => (
          <figure
            key={item.id}
            className={`gallery__item gallery__item--${item.id}`}
          >
            <img
              src={item.image}
              className="gallery__img"
              alt={`Image ${item.id}`}
            />
            <figcaption className="gallery_caption">{item.caption}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
};

export default Gallary;
