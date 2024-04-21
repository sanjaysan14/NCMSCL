import React from "react";
import "../Stylesheets/ImagePopup.css";

const ImagePopup = ({ imageUrl, onClose }) => {
  return (
    <div className="image-popup-container">
      <div className="image-popup-content">
        <span className="close-icon" onClick={onClose}>
          &times;
        </span>
        <img src={imageUrl} className="popup-image" />
      </div>
    </div>
  );
};

export default ImagePopup;
