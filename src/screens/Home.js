import React, { useEffect } from "react";
import Hero from "../components/Home/Hero";
import MealShowCase from "../components/Home/MealShowCase";

import { motion } from "framer-motion";

const homeVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  exit: {
    x: "-100vw",
  },
};

const Home = () => {
  // useEffect(() => {
  //   window.scrollTo({ behavior: "smooth", top: "0px" });
  // }, []);

  return (
    <motion.div
      variants={homeVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Hero />
      <MealShowCase />
    </motion.div>
  );
};

export default Home;
