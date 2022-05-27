import React from "react";
import { useParams } from "react-router-dom";
import RecipeInstruction from "../components/DetailRecipe/RecipeInstruction";
import meals from "./../assets/mealSuggestion/meals.json";

const DetailRecipe = () => {
  return (
    <>
      <RecipeInstruction />
    </>
  );
};

export default DetailRecipe;
