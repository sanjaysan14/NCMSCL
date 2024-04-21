import React from "react";
// import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { HeroCarousel } from "./HeroCarousel";
import { Teams } from "./Teams";
import Gallary from "./Gallary";
import UpcomingEvents from "./UpcmmingEvents";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
export const Home = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <HeroCarousel />
      {/* <Champions/> */}
      <Teams />

      <Gallary />
      <UpcomingEvents />
      <Contact />
      <Footer />
    </>
  );
};
