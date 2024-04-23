import React from "react";

import TeamLogo from "../Images/teamlogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
  faLinkedin,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "../Stylesheets/TeamBanner1.css";

export const TeamBanner1 = () => {
  return (
    <>
      <div className="Team_Banner1">
        <div className="Team_Banner1__left ">
          <h1>NCMS</h1>
          <h2>At NCMS Championship League</h2>
          <h3>
            we are committed to nurturing leadership skills among postgraduate
            students. Our team comprises dedicated individuals who strive to
            make a positive impact through collaboration, innovation, and
            personal growth.
          </h3>

          <div className="mainIcons3">
            <a href="https://www.instagram.com/ncms_championship_league?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
              <FontAwesomeIcon className="Icon4" icon={faInstagram} />
            </a>
            <a href="">
              <FontAwesomeIcon className="Icon1" icon={faFacebookSquare} />
            </a>
            <a href="">
              {" "}
              <FontAwesomeIcon className="Icon2" icon={faSquareXTwitter} />
            </a>
            <a href="">
              {" "}
              <FontAwesomeIcon className="Icon3" icon={faLinkedin} />
            </a>
          </div>
        </div>
        <div className="Team_Banner1_right">
          <img className="Team_logo" src={TeamLogo} alt="" />
        </div>
      </div>
    </>
  );
};
