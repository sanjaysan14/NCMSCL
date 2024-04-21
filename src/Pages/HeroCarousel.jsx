import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Trophy from "../Images/Trophy.png";
import Sports from "../Images/sports.png";
import "../Stylesheets/Hero.css";
export const HeroCarousel = () => {
  return (
    <div className="HeroCarousel_Banner">
      <img className="C_Trophy" src={Trophy} alt=" Carousel Trophy" />{" "}
      <img className="C_Sports" src={Sports} alt="Sports bg" />
      <Carousel data-bs-theme="light" className="C_head">
        <Carousel.Item>
          <div className="C_Content">
            <h1>Vision</h1>
            <p>
              We envision a world where every postgraduate student emerges as a
              dynamic leader, driving positive change in society and the global
              community.
            </p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="C_Content">
            <h1>Mission</h1>
            <p>
              Empower postgraduate students to become impactful leaders through
              comprehensive programs and support.
            </p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="C_Content">
            <h1>Goal</h1>
            <p>
              To cultivate a new generation of leaders who drive positive change
              with integrity and innovation.
            </p>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
