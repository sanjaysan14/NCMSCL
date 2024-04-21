import React from "react";
import "../Stylesheets/Footer.css";
import NCMSCLLOGO from "../Images/leaguelogo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
  faLinkedin,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";
export const Footer = () => {
  return (
    <>
      {" "}
      <div className="Footer_Container">
        <div className="Footer_Data1">
          <img src={NCMSCLLOGO} alt="" />
          <h1>Championship League</h1>
          <h3>A League that Creates Leaders</h3>
          <div className="Footer_h4">
            <div>
              <a href="https://www.instagram.com/ncms_championship_league?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                {" "}
                <FontAwesomeIcon className="Icon4" icon={faInstagram} bounce />
              </a>
            </div>
            <div>
              <a href="https://www.instagram.com/ncms_championship_league?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                {" "}
                <h4>Follow Us</h4>
              </a>
            </div>
          </div>
        </div>
        <div>
          <ul className="Footer_Data2">
            <Link to="/" className="Footer_Data2_link">
              <li> Home</li>
            </Link>
            <Link to="/about" className="Footer_Data2_link">
              <li> About Us</li>
            </Link>
            <Link to="/teams" className="Footer_Data2_link">
              <li> Team</li>
            </Link>
            <Link to="/gallery" className="Footer_Data2_link">
              <li> Galley</li>
            </Link>
          </ul>
        </div>
        <div>
          <ul className="Footer_Data3">
            <li>Contact Info</li>
            <h6>0987544355</h6>
            <h6>98765567678</h6>
          </ul>
        </div>

        <div className="Footer_Data4">
          <h1 className="Footer_Data4_head">Follow Us</h1>
          <div className="Footer_Icons">
            <FontAwesomeIcon className="Icon1" icon={faFacebookSquare} />
            <FontAwesomeIcon className="Icon2" icon={faSquareXTwitter} />
            <FontAwesomeIcon className="Icon3" icon={faLinkedin} />
          </div>
        </div>
        <div>
          <h1 className="Map_head">Reach Us</h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7763.928728510767!2d77.728078!3d13.352492!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb1ef0cae80db87%3A0xed7cec0dda7e1c1f!2sNagarjuna%20College%20of%20Management%20Studies!5e0!3m2!1sen!2sin!4v1713200884234!5m2!1sen!2sin"
            width="200"
            height="150"
            //   style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      {/* <span>Developed By Sanjay S💡</span> */}
      <div>
        <h4 className="Footer_Copyrights">
          <span>©</span> 2024 NCMS | All Rights Reserved
        </h4>
      </div>
    </>
  );
};
