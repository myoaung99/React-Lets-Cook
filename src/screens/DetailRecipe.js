import React, { useEffect } from "react";
import RecipeInstruction from "../components/DetailRecipe/RecipeInstruction";

const DetailRecipe = () => {
  // scroll to top
  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: "0px" });
  }, []);

  return (
    <>
      <RecipeInstruction />
    </>
  );
};

export default DetailRecipe;
