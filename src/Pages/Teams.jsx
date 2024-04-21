import React from "react";
import FalconLogo from "../Images/FearlessFalcons.png";
import GG from "../Images/GG1.png";
import TT from "../Images/TT.png";
import DD from "../Images/DD.png";
import LL from "../Images/LL.png";
import CC from "../Images/CC.png";
import EE from "../Images/EE.png";
import RE from "../Images/RE.png";
import "../Stylesheets/Teams.css";
import { Link } from "react-router-dom";
export const Teams = () => {
  return (
    <>
      <div className="Team_Banner">
        <h1 className="Team_head">Teams</h1>

        <div className="Teams">
          <div className="Team_List">
            <img src={FalconLogo} alt="Falcons Logo" />

            <h1 className="team-name">Fearless Falcons</h1>
            <div className="team-info">
              <Link to="/Teams" className="Team_btn">
                View Team
              </Link>
            </div>
          </div>
          <div className="Team_List">
            <img src={TT} alt="Falcons Logo" />

            <h1 className="team-name">Terrific Tigers</h1>
            <div className="team-info">
              <Link to="/Teams" className="Team_btn">
                View Team
              </Link>
            </div>
          </div>
          <div className="Team_List">
            <img src={GG} alt="Falcons Logo" />

            <h1 className="team-name">Gigantic Giraffes</h1>
            <div className="team-info">
              <Link to="/Teams" className="Team_btn">
                View Team
              </Link>
            </div>
          </div>
          <div className="Team_List">
            <img src={DD} alt="Falcons Logo" />

            <h1 className="team-name">Daring Dolphins</h1>
            <div className="team-info">
              <Link to="/Teams" className="Team_btn">
                View Team
              </Link>
            </div>
          </div>
        </div>
        <div className="Teams">
          <div className="Team_List">
            <img src={RE} alt="Falcons Logo" />

            <h1 className="team-name">Regal Eagles</h1>
            <div className="team-info">
              <Link to="/Teams" className="Team_btn">
                View Team
              </Link>
            </div>
          </div>
          <div className="Team_List">
            <img src={LL} alt="Falcons Logo" />

            <h1 className="team-name">Legendary Lions</h1>
            <div className="team-info">
              <Link to="/Teams" className="Team_btn">
                View Team
              </Link>
            </div>
          </div>
          <div className="Team_List">
            <img src={CC} alt="Falcons Logo" />

            <h1 className="team-name">Charming Cheetah's</h1>
            <div className="team-info">
              <Link to="/Teams" className="Team_btn">
                View Team
              </Link>
            </div>
          </div>
          <div className="Team_List">
            <img src={EE} alt="Falcons Logo" />

            <h1 className="team-name">Elegant Elephant</h1>
            <div className="team-info">
              <Link to="/Teams" className="Team_btn">
                View Team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
