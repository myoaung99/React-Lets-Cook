import React from "react";

import meals from "./../../assets/mealSuggestion/meals.json";
import MealCard from "./MealCard";

const MealShowCase = () => {
  // display pupular meals row
  const PopularMeals = () => {
    return meals.popularMeals.map((meal) => (
      <MealCard key={meal.idMeal} meal={meal} />
    ));
  };

  // display suggestion meal row
  const SuggestionMeals = () => {
    return meals.suggestionMeals.map((meal) => (
      <MealCard key={meal.idMeal} meal={meal} />
    ));
  };
  return (
    <section className="container mx-auto min-h-screen my-16 px-3">
      <h1 className="text-center text-4xl">What's is on your mind?</h1>

      <div className="my-16">
        <h4 className="text-2xl mb-5 lg:pl-10 xl:pl-0">
          Today's Popular Meals
        </h4>
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4  meal-row-1">
          {<PopularMeals />}
        </div>
      </div>

      <div className="mb-16">
        <h4 className="text-2xl mb-5 lg:pl-10 xl:pl-0">You May Like</h4>
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4 meal-row-2">
          {<SuggestionMeals />}
        </div>
      </div>
    </section>
  );
};

export default MealShowCase;
