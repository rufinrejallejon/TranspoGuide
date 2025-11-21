import React from "react";
import Hero from "../components/Hero";
import DriversCard from "../components/DriversCard.jsx";
import Services from "./services/page.jsx";
import Contact from "./contact/page.jsx";

export const metadata = {
  title: "Home Page",
};

const mainPage = () => {
  return (
    <>
      <Hero />
      <DriversCard />
      <Services />
      <Contact />
    </>
  );
};

export default mainPage;
