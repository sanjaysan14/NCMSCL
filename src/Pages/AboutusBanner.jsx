import React from "react";
import "../Stylesheets/AboutusBanner.css";
import AboutUslogo from "../Images/aboutimg.png";

export const AboutusBanner = () => {
  return (
    <div>
      {" "}
      <div className="AboutUs_Banner">
        <div className="AboutUs_Banner_left">
          <h1 className=" AboutUs_Banner_left_h1">About Us</h1>
          <h2 className="AboutUs_Banner_left_h2">
            Welcome to NCMS Championship League
          </h2>
          <h3 className="AboutUs_Banner_left_h3">
            At NCMS Championship League A, we believe in cultivating leaders who
            shape the future. We are a premier organization dedicated to
            nurturing leadership skills among postgraduate students, including
            those pursuing PG, MCA, MBA, and MCom degrees. <br /> Our mission is
            to empower students with the knowledge, skills, and confidence to
            become impactful leaders in their respective fields.
          </h3>
        </div>
        <div className="Hero_right">
          <img className="Hero_logo" src={AboutUslogo} alt="" />
        </div>
      </div>
    </div>
  );
};
