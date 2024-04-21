import React from "react";
import { TeamBanner1 } from "./TeamBanner1";
import { TeamBanner2 } from "../Pages/TeamBanner2";
import Testimonial from "./Testimonial";
import { Footer } from "./Footer";
// import { TeamBanner3 } from "../Pages/TeamBanner3";

export const Team = () => {
  return (
    <>
      <TeamBanner1 />
      <TeamBanner2 />
      {/* <TeamBanner3 /> */}
      <Testimonial />
      <Footer />
    </>
  );
};
