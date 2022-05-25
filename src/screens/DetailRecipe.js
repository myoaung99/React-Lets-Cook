import React from "react";
import { useParams } from "react-router-dom";

const DetailRecipe = () => {
  const params = useParams();
  const id = params.recipeId;
  return (
    <div>
      <h1 className="pt-16 text-4xl">This is detail recipes section</h1>
      <span className="text-2xl">{id}</span>
    </div>
  );
};

export default DetailRecipe;
