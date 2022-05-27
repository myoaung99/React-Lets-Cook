import React from "react";
import { Link } from "react-router-dom";

const MealCard = React.memo((props) => {
  const { meal } = props;

  const pathLink = `/detail-recipe/${meal.idMeal}`;

  return (
    <Link to={pathLink}>
      <div className="cursor-pointer shadow-md rounded hover:-translate-y-3 transition-transform">
        <img
          id={meal.idMeal}
          className="object-cover mx-auto  rounded"
          src={meal.strMealThumb}
          alt="meal suggestion"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title={meal.strMeal}
        />
      </div>
    </Link>
  );
});

export default MealCard;
