import React from "react";
import "../Stylesheets/TeamBanner3.css";
import FF from "../Images/FearlessFalcons.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import FFSponsor from "../Images/FFSponsor.png";
export const FearlessFalconInfo = () => {
  return (
    <>
      <div className="Team_Container_Info">
        {/* fearless falcons */}
        <div className="FearlessFalcon">
          <div className=" TeamBanner3_Head">
            <h1>Fearless Falcons</h1>
            <h6>Forging Paths, Defying Limits</h6>
          </div>
          <div className="Teamates_List_Container">
            <div className="Teamates_List">
              <div className="Teamate">
                <h3>Sanjay S</h3>
                <h6>Technical Coordinator</h6>
              </div>
              <div className="Teamate">
                <h3>Impana HH</h3>
                <h6>Team Coordinator</h6>
              </div>
              <div className="Teamate">
                <h3>Nikhil</h3>
                <h6>Team Coordinator</h6>
              </div>
              <div className="Teamate">
                <h3>Deepashree</h3>
                <h6>Team Coordinator</h6>
              </div>
              <div className="Teamate">
                <h3>Pavan </h3>
                <h6>Team Coordinator</h6>
              </div>
            </div>
            <div>
              <img src={FF} alt="FearlessFalcon" />
            </div>
            <div className="Teamates_List_Right">
              <div className="Teamate_Right">
                <h3>Sanjay S</h3>
                <h6>Technical Coordinator</h6>
              </div>
              <div className="Teamate_Right">
                <h3>Impana HH</h3>
                <h6>Team Coordinator</h6>
              </div>
              <div className="Teamate_Right">
                <h3>Nikhil</h3>
                <h6>Team Coordinator</h6>
              </div>
              <div className="Teamate_Right">
                <h3>Deepashree</h3>
                <h6>Team Coordinator</h6>
              </div>
              <div className="Teamate_Right">
                <h3>Pavan </h3>
                <h6>Team Coordinator</h6>
              </div>
            </div>
          </div>
          <div className="Socialmedia">
            {" "}
            <h4>Follow Us </h4>
            <FontAwesomeIcon className="Icon4" icon={faInstagram} />
          </div>
          <div className="Sponsor">
            {" "}
            <h4>Sponsor</h4>
            <img src={FFSponsor} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default FearlessFalconInfo;
