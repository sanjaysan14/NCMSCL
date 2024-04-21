import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
  faLinkedin,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "../Stylesheets/AboutHero.css";
import AboutVideo from "../Images/aboutvi.mp4";

export const AboutHero = () => {
  return (
    <>
      <div className="About_Hero_Banner">
        <video autoPlay loop muted className="overlay">
          <source src={AboutVideo} type="video/mp4" />
        </video>
        <div className="About_left">
          <h1>NCMS</h1>
          <h2>
            At NCMS Championship League A, we believe in cultivating leaders who
            shape the future.{" "}
          </h2>
          <h3>
            We are a premier organization dedicated to nurturing leadership
            skills among postgraduate students,
          </h3>
          <Link to="/Teams" className="Hero_btn">
            View Teams
          </Link>
          <div className="mainIcons">
            <a href="https://www.instagram.com/ncms_championship_league?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
              <FontAwesomeIcon className="Icon4" icon={faInstagram} bounce />
            </a>
            <a href="">
              <FontAwesomeIcon
                className="Icon1"
                icon={faFacebookSquare}
                bounce
              />
            </a>
            <a href="">
              {" "}
              <FontAwesomeIcon
                className="Icon2"
                icon={faSquareXTwitter}
                bounce
              />
            </a>
            <a href="">
              {" "}
              <FontAwesomeIcon className="Icon3" icon={faLinkedin} bounce />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
