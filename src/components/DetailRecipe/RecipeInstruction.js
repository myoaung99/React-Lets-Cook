import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "./../UI/LoadingSpinner";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipeData } from "../../store/recipes-actions";

const RecipeInstruction = () => {
  // get id from route
  const params = useParams();
  const id = params.recipeId;

  const dispatch = useDispatch();

  const recipeData = useSelector((state) => state.recipe);

  // fetch recipe base on id
  useEffect(() => {
    dispatch(fetchRecipeData(id));
  }, [dispatch, id]);

  // re orgainze responsed paragraph
  // break sentences through STEP keywords
  const transformPara = (str) => {
    const paraArray = str.split("STEP");
    return paraArray.map((p) => {
      if (p && p.length > 20) {
        const firstL = p.charAt(1);

        return (
          <p className="mb-6 text-primaryBlackText" key={firstL}>
            {p}
          </p>
        );
      }

      return null;
    });
  };

  // convert normal youtube links to embed links
  function getYoutubeId(url) {
    var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    var match = url.match(regExp);

    if (match && match[2].length === 11) {
      return match[2];
    } else {
      return "error";
    }
  }

  const recipe = recipeData.recipes[0];

  let content = (
    <div className="w-full h-screen flex justify-center items-center">
      <LoadingSpinner />
    </div>
  );

  if (!recipeData.isLoading && recipeData.errors) {
    content = (
      <p className="text-xl text-red-800 mt-10 min-h-screen">
        Something went wrong. Try to refresh again!
      </p>
    );
  }

  if (!recipeData.isLoading && !recipeData.errors) {
    content = (
      <>
        <h4 className="mt-6 mb-10 text-2xl ">
          Instructions for cooking
          <a href="#vd" className="font-semibold underline underline-offset-2">
            {recipe.strMeal}
          </a>
        </h4>

        {/* image */}
        <div className="flex justify-center mb-10">
          <img
            className="w-40 rounded-sm shadow-md border-l-4 border-primary border-dashed"
            src={recipe.strMealThumb}
            alt="meal"
          />
        </div>

        {/* paragraph */}
        <div className="md:columns-3 gap-6 text-justify ">
          {transformPara(recipe.strInstructions)}
        </div>

        {/* video */}
        <div className="py-12 " id="vd">
          <iframe
            width="716"
            height="403"
            className=" w-full "
            src={
              "https://www.youtube.com/embed/" + getYoutubeId(recipe.strYoutube)
            }
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </>
    );
  }

  return (
    <section className="bg-header-bg ">
      <div className="pt-12 mx-auto px-6 max-w-screen-md mb-24">{content}</div>
    </section>
  );
};

export default RecipeInstruction;
