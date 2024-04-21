import React, { useState } from "react";
import FF from "../Images/FearlessFalcons.png";
import TT from "../Images/TT.png";
import GG1 from "../Images/GG1.png";
import DD from "../Images/DD.png";
import RE from "../Images/RE.png";
import LL from "../Images/LL.png";
import CC from "../Images/CC.png";
import EE from "../Images/EE.png";
import NCMSC from "../Images/NCMSC.png";
import "../Stylesheets/GallaryPage.css";
import GI1 from "../Images/GI1.png";
import GI2 from "../Images/GI2.png";
import GI3 from "../Images/GI3.png";
import GI4 from "../Images/GI4.png";
import GI5 from "../Images/GI5.png";
import GI6 from "../Images/GI6.png";
import { Footer } from "./Footer";
// import ContactPopup from "./ContactPopup";
import ImagePopup from "./ImagePopup";

export const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("Games");
  const [selectedImage, setSelectedImage] = useState(null);

  // Content for each category
  const categoryContent = {
    Games: [
      { id: 1, image: GI1, caption: "Volley Ball" },
      { id: 2, image: GI2, caption: "Riley" },
      { id: 3, image: GI3, caption: "Chess" },
      { id: 4, image: GI4, caption: "Cricket" },
      { id: 5, image: GI5, caption: "Table Tennis" },
      { id: 6, image: GI6, caption: "Volley Ball" },
    ],
    "Fearless Falcons": [
      { id: 1, image: GI1, caption: "Volley Ball" },
      { id: 2, image: GI2, caption: "Riley" },
      // { id: 3, image: GI3, caption: "Chess" },
      // { id: 4, image: GI4, caption: "Cricket" },
      // { id: 5, image: GI5, caption: "Table Tennis" },
      // { id: 6, image: GI6, caption: "Volley Ball" },
    ],
    "Terrific Tigers": [
      { id: 1, image: GI1, caption: "Volley Ball" },
      { id: 2, image: GI2, caption: "Riley" },
      { id: 3, image: GI3, caption: "Chess" },
      // { id: 4, image: GI4, caption: "Cricket" },
      // { id: 5, image: GI5, caption: "Table Tennis" },
      // { id: 6, image: GI6, caption: "Volley Ball" },
    ],
    "Gaigantic Girrafes": [
      { id: 1, image: GI1, caption: "Volley Ball" },
      { id: 2, image: GI2, caption: "Riley" },
      { id: 3, image: GI3, caption: "Chess" },
      { id: 4, image: GI4, caption: "Cricket" },
      { id: 5, image: GI5, caption: "Table Tennis" },
      { id: 6, image: GI6, caption: "Volley Ball" },
    ],
    "Daring Dolphins": [
      { id: 1, image: GI1, caption: "Volley Ball" },
      { id: 2, image: GI2, caption: "Riley" },
      { id: 3, image: GI3, caption: "Chess" },
      { id: 4, image: GI4, caption: "Cricket" },
      { id: 5, image: GI5, caption: "Table Tennis" },
      { id: 6, image: GI6, caption: "Volley Ball" },
    ],

    "Regal Eagles": [
      { id: 1, image: GI1, caption: "Volley Ball" },
      { id: 2, image: GI2, caption: "Riley" },
      // { id: 3, image: GI3, caption: "Chess" },
      // { id: 4, image: GI4, caption: "Cricket" },
      // { id: 5, image: GI5, caption: "Table Tennis" },
      // { id: 6, image: GI6, caption: "Volley Ball" },
    ],
    "Legendary Lions": [
      { id: 1, image: GI1, caption: "Volley Ball" },
      { id: 2, image: GI2, caption: "Riley" },
      { id: 3, image: GI3, caption: "Chess" },
      // { id: 4, image: GI4, caption: "Cricket" },
      // { id: 5, image: GI5, caption: "Table Tennis" },
      // { id: 6, image: GI6, caption: "Volley Ball" },
    ],
    "Charming Cheetahs": [
      { id: 1, image: GI1, caption: "Volley Ball" },
      { id: 2, image: GI2, caption: "Riley" },
      { id: 3, image: GI3, caption: "Chess" },
      { id: 4, image: GI4, caption: "Cricket" },
      { id: 5, image: GI5, caption: "Table Tennis" },
      { id: 6, image: GI6, caption: "Volley Ball" },
    ],
    "Elegant Elephant": [
      { id: 1, image: GI1, caption: "Volley Ball" },
      { id: 2, image: GI2, caption: "Riley" },
      { id: 3, image: GI3, caption: "Chess" },
      { id: 4, image: GI4, caption: "Cricket" },
      { id: 5, image: GI5, caption: "Table Tennis" },
      { id: 6, image: GI6, caption: "Volley Ball" },
    ],
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleImageClick = (imageUrl, caption) => {
    setSelectedImage({ imageUrl, caption });
  };

  const handleCloseImagePopup = () => {
    setSelectedImage(null);
  };
  return (
    <>
      <div className="Gallary_Container">
        <div className="Gallary_Head">
          <h1>GALLERY</h1>
        </div>
        <div className="Gallary_Teams">
          <img src={FF} alt="" />
          <img src={TT} alt="" />
          <img src={GG1} alt="" />
          <img src={DD} alt="" />
          <img className="Gallary_Teams_NCMSC" src={NCMSC} alt="" />
          <img src={RE} alt="" />
          <img src={LL} alt="" />
          <img src={CC} alt="" />
          <img src={EE} alt="" />
        </div>
      </div>

      <div>
        <div className="grid_container">
          <h1 className="Gallery_Container_Head">Gallary</h1>
          <div>
            <ul className="Gallery_List">
              <li
                className={selectedCategory === "Games" ? "active" : ""}
                onClick={() => handleCategoryClick("Games")}
              >
                Games
              </li>
              <li
                className={
                  selectedCategory === "Fearless Falcons" ? "active" : ""
                }
                onClick={() => handleCategoryClick("Fearless Falcons")}
              >
                Fearless Falcons
              </li>
              <li
                className={
                  selectedCategory === "Terrific Tigers" ? "active" : ""
                }
                onClick={() => handleCategoryClick("Terrific Tigers")}
              >
                Terrific Tigers
              </li>
              <li
                className={
                  selectedCategory === "Gaigantic Girrafes" ? "active" : ""
                }
                onClick={() => handleCategoryClick("Gaigantic Girrafes")}
              >
                Gaigantic Girrafes
              </li>

              <li
                className={
                  selectedCategory === "Daring Dolphins" ? "active" : ""
                }
                onClick={() => handleCategoryClick("Daring Dolphins")}
              >
                Daring Dolphins
              </li>
              <li
                className={selectedCategory === "Regal Eagles" ? "active" : ""}
                onClick={() => handleCategoryClick("Regal Eagles")}
              >
                Regal Eagles
              </li>
              <li
                className={
                  selectedCategory === "Legendary Lions" ? "active" : ""
                }
                onClick={() => handleCategoryClick("Legendary Lions")}
              >
                Legendary Lions
              </li>
              <li
                className={
                  selectedCategory === "Charming Cheetahs" ? "active" : ""
                }
                onClick={() => handleCategoryClick("Charming Cheetahs")}
              >
                Charming Cheetahs
              </li>
              <li
                className={
                  selectedCategory === "Elegant Elephant" ? "active" : ""
                }
                onClick={() => handleCategoryClick("Elegant Elephant")}
              >
                Elegant Elephant
              </li>
            </ul>
          </div>
          <div className="gallery">
            {categoryContent[selectedCategory].map((item) => (
              <figure
                key={item.id}
                className={`gallery__item gallery__item--${item.id}`}
                onClick={() => handleImageClick(item.image, item.caption)}
              >
                <img
                  src={item.image}
                  className="gallery__img"
                  alt={`Image ${item.id}`}
                />
                <figcaption className="gallery_caption">
                  {item.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
      <Footer />
      {/* <ContactPopup /> */}
      {selectedImage && (
        <ImagePopup
          imageUrl={selectedImage.imageUrl}
          caption={selectedImage.caption}
          onClose={handleCloseImagePopup}
        />
      )}
    </>
  );
};

export default GalleryPage;
