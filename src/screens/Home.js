import React, { useEffect } from "react";
import Hero from "../components/Home/Hero";
import MealShowCase from "../components/Home/MealShowCase";

const Home = () => {
  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: "0px" });
  }, []);
  return (
    <>
      <Hero />
      <MealShowCase />
    </>
  );
};

export default Home;
