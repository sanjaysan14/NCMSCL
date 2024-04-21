import React from "react";
import { AboutHero } from "./AboutHero";
import { AboutusBanner } from "./AboutusBanner";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { HeroCarousel } from "./HeroCarousel";
import { Teams } from "./Teams";

export const About = () => {
  return (
    <>
      <AboutHero />
      <HeroCarousel />
      <AboutusBanner />
      <Teams />
      <Contact />
      <Footer />
    </>
  );
};
