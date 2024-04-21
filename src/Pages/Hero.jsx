import React from "react";
import { Link } from "react-router-dom";
import Leaguelogo from "../Images/leaguelogo1.png";
import AboutUslogo from "../Images/aboutimg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
  faLinkedin,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "../Stylesheets/Hero.css";

export const Hero = () => {
  return (
    <>
      <div className="Hero_Banner">
        <div className="Hero_left">
          <h1>NCMS</h1>
          <h2>Championship League</h2>
          <h3>A League that Creates Leaders</h3>
          {/* Use Link to navigate to the About page */}
          <Link to="/about" className="Hero_btn">
            Know More
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
        <div className="Hero_right">
          <img className="Hero_logo" src={Leaguelogo} alt="" />
        </div>
      </div>
      {/* ----About us ------  */}
      <div className="Hero_Banner1">
        <div className="Hero_left">
          <h1 className=" Hero_left_h1">About Us</h1>
          <h2 className="Hero_left_h2">
            At NCMS Championship League A, we believe in cultivating leaders who
            shape the future.
          </h2>
          <h3 className="Hero_left_h3">
            We are a premier organization dedicated to nurturing leadership
            skills among postgraduate students,
          </h3>

          <Link to="/about" className="Aboutus_btn">
            Know More
          </Link>
        </div>
        <div className="Hero_right">
          <img className="Hero_logo" src={AboutUslogo} alt="" />
        </div>
      </div>
    </>
  );
};
