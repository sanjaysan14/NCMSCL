import React, { useState } from "react";
import FF from "../Images/FearlessFalcons.png";
import TT from "../Images/TT.png";
import GG1 from "../Images/GG1.png";
import DD from "../Images/DD.png";
import RE from "../Images/RE.png";
import LL from "../Images/LL.png";
import CC from "../Images/CC.png";
import EE from "../Images/EE.png";
import "../Stylesheets/TeamBanner2.css";
import FearlessFalconsInfo from "./FearlessFalconInfo";
import TerrificTigersInfo from "./TerrificTigersInfo";
import GiganticGirrafesInfo from "./GiganticGirrafesInfo";
import DaringDolphinsInfo from "./DaringDolphinsInfo";
import RegalEagleInfo from "./RegalEagleInfo";
import LegendaryLionsInfo from "./LegendaryLionsInfo";
import CharmingCheethasInfo from "./CharmingCheethasInfo";
import ElegantElephantInfo from "./ElegantElephantInfo";

export const TeamBanner2 = () => {
  const [selectedTeam, setSelectedTeam] = useState("FearlessFalcons");

  const handleCardClick = (teamName) => {
    setSelectedTeam(teamName);
  };

  return (
    <>
      <div className="Team_Container">
        <div className="TeamBanner2_Container">
          <div className="TeamBanner2_Cards">
            <div
              className={`TeamBanner2_Card1 ${
                selectedTeam === "FearlessFalcons" ? "selected" : ""
              }`}
              onClick={() => handleCardClick("FearlessFalcons")}
            >
              <img src={FF} className="img_FF" alt="FearlessFalcons" />
              <h4>Team</h4>
              <h1>Fearless Falcons</h1>
            </div>
            <div
              className={`TeamBanner2_Card1 ${
                selectedTeam === "TerrificTigers" ? "selected" : ""
              }`}
              onClick={() => handleCardClick("TerrificTigers")}
            >
              <img src={TT} className="img_FF" alt="TerrificTigers" />
              <h4>Team</h4>
              <h1>Terrific Tigers</h1>
            </div>
          </div>
          <div className="TeamBanner2_Cards">
            <div
              className={`TeamBanner2_Card1 ${
                selectedTeam === "GiganticGirrafes" ? "selected" : ""
              }`}
              onClick={() => handleCardClick("GiganticGirrafes")}
            >
              <img src={GG1} className="img_FF" alt="GiganticGirrafes" />
              <h4>Team</h4>
              <h1>Gigantic Girrafes</h1>
            </div>
            <div
              className={`TeamBanner2_Card1 ${
                selectedTeam === "DaringDolphins" ? "selected" : ""
              }`}
              onClick={() => handleCardClick("DaringDolphins")}
            >
              <img src={DD} className="img_FF" alt="DaringDolphins" />
              <h4>Team</h4>
              <h1>Daring Dolphins</h1>
            </div>
          </div>
          <div className="TeamBanner2_Cards">
            <div
              className={`TeamBanner2_Card1 ${
                selectedTeam === "RegalEagle" ? "selected" : ""
              }`}
              onClick={() => handleCardClick("RegalEagle")}
            >
              <img src={RE} className="img_FF" alt="RegalEagle" />
              <h4>Team</h4>
              <h1>Regal Eagles </h1>
            </div>
            <div
              className={`TeamBanner2_Card1 ${
                selectedTeam === "LegendaryLions" ? "selected" : ""
              }`}
              onClick={() => handleCardClick("LegendaryLions")}
            >
              <img src={LL} className="img_FF" alt="LegendaryLions" />
              <h4>Team</h4>
              <h1>Legendary Lions</h1>
            </div>
          </div>
          <div className="TeamBanner2_Cards">
            <div
              className={`TeamBanner2_Card1 ${
                selectedTeam === "CharmingCheethas" ? "selected" : ""
              }`}
              onClick={() => handleCardClick("CharmingCheethas")}
            >
              <img src={CC} className="img_FF" alt="CharmingCheethas" />
              <h4>Team</h4>
              <h1>Charming Cheethas</h1>
            </div>
            <div
              className={`TeamBanner2_Card1 ${
                selectedTeam === "ElegantElephant" ? "selected" : ""
              }`}
              onClick={() => handleCardClick("ElegantElephant")}
            >
              <img src={EE} className="img_FF" alt="ElegantElephant" />
              <h4>Team</h4>
              <h1>Elegant Elephant</h1>
            </div>
          </div>
        </div>
      </div>
      {selectedTeam === "FearlessFalcons" && <FearlessFalconsInfo />}
      {selectedTeam === "TerrificTigers" && <TerrificTigersInfo />}
      {selectedTeam === "GiganticGirrafes" && <GiganticGirrafesInfo />}
      {selectedTeam === "DaringDolphins" && <DaringDolphinsInfo />}
      {selectedTeam === "RegalEagle" && <RegalEagleInfo />}
      {selectedTeam === "LegendaryLions" && <LegendaryLionsInfo />}
      {selectedTeam === "CharmingCheethas" && <CharmingCheethasInfo />}
      {selectedTeam === "ElegantElephant" && <ElegantElephantInfo />}
    </>
  );
};
