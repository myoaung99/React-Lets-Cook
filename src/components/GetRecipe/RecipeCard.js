import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = (props) => {
  const { strMealThumb, strMeal, idMeal } = props.data;

  // route link to prop
  const linkPath = `/detail-recipe/${idMeal}`;

  return (
    <>
      <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-5">
        {/* meal image */}
        <Link to={linkPath}>
          <img
            className="rounded-t-lg object-contain"
            src={strMealThumb}
            alt={strMeal}
          />
        </Link>

        {/* meal title */}
        <div className="p-5">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white h-14">
            {strMeal}
          </h5>

          {/* read more button */}
          <div className="flex items-stretch">
            <Link to={linkPath} className="w-full">
              <button className="bg-primary w-full py-1.5 px-3 rounded  hover:bg-primaryDark focus:ring-primaryDark focus:ring-offset-indigo-200 text-primaryWhiteText transition ease-in duration-200 font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 ">
                Read more...
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeCard;
