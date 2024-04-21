import React from "react";
import "../Stylesheets/Champions.css";
import Position from "../Images/Position1.png";
import CircleDesign from "../Images/CircleDesign1.png";
import CircleDesign2 from "../Images/CircleDesign2.png";
export const Champions = () => {
  return (
    <>
      <div className="Champions_data">
        <img className=" CircleDesign" src={CircleDesign} alt="" />
        <h1>Champions</h1>
        <p>
          The NCMS Championship League has declared its champions, recognizing a
          team that showcased exceptional skill and teamwork. Their victory
          serves as a testament to their dedication and prowess, inspiring
          athletes to strive for excellence in the pursuit of sporting glory.
        </p>
        <button className="Champions_btn">2024</button>
      </div>
      <div className="Position_img">
        <img src={Position} alt="" />
        <img className=" CircleDesign1" src={CircleDesign2} alt="" />
      </div>
    </>
  );
};
