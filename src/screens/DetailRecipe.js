import React from "react";
import { useParams } from "react-router-dom";
import RecipeInstruction from "../components/DetailRecipe/RecipeInstruction";

const DetailRecipe = () => {
  const params = useParams();
  const id = params.recipeId;
  return (
    <>
      <RecipeInstruction />
    </>
  );
};

export default DetailRecipe;
