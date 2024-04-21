import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders, faXmark } from "@fortawesome/free-solid-svg-icons";
import ClgLOGO from "../Images/Ncms.png";
import ContactPopup from "./ContactPopup"; // Import the ContactPopup component
import "../Stylesheets/Navbar.css";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("/");
  const location = useLocation();

  useEffect(() => {
    // Update activeItem when the location changes
    setActiveItem(location.pathname);
  }, [location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (path) => {
    setActiveItem(path);
    toggleMenu();
  };

  return (
    <>
      <div className={`Nav_Container ${isOpen ? "open" : ""}`}>
        <div className="Navbar_Toggle" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isOpen ? faXmark : faSliders} />{" "}
        </div>

        <ul className={`Navbar ${isOpen ? "open" : ""}`}>
          <li>
            <Link
              to="/"
              onClick={() => handleItemClick("/")}
              style={{ borderTop: activeItem === "/" && "3px solid #FFD700" }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={() => handleItemClick("/about")}
              style={{
                borderTop: activeItem === "/about" && "3px solid #FFD700",
              }}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/teams"
              onClick={() => handleItemClick("/teams")}
              style={{
                borderTop: activeItem === "/teams" && "3px solid #FFD700",
              }}
            >
              Teams
            </Link>
          </li>
          <li>
            <Link
              to="/gallery"
              onClick={() => handleItemClick("/gallery")}
              style={{
                borderTop: activeItem === "/gallery" && "3px solid #FFD700",
              }}
            >
              Gallery
            </Link>
          </li>
        </ul>
        <div className="logo">
          <img className="Nav_logo" src={ClgLOGO} alt="" />
        </div>
        <div className="Navbar_btn">
          {/* Replace the button with the ContactPopup component */}
          <ContactPopup />
        </div>
      </div>
    </>
  );
};
