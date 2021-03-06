import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import RecipeInstruction from "../components/DetailRecipe/RecipeInstruction";

const detailVariants = {
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

const DetailRecipe = () => {
  const navigate = useNavigate();

  // scroll to top
  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: "0px" });
  }, []);

  return (
    <motion.div
      variants={detailVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <RecipeInstruction />
    </motion.div>
  );
};

export default DetailRecipe;
