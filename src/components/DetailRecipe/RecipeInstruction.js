import React, { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "./../UI/LoadingSpinner";

const initialState = {
  instructions: null,
  isLoading: true,
  error: null,
};

const recipeReducer = (state, action) => {
  if (action.type === "SUCCESS") {
    return {
      instructions: action.payload,
      isLoading: false,
      error: null,
    };
  } else if (action.type === "ERROR") {
    return {
      instructions: null,
      isLoading: false,
      error: action.payload,
    };
  }

  return initialState;
};

const RecipeInstruction = () => {
  const params = useParams();
  const id = params.recipeId;

  const [recipeData, dispatchRecipeData] = useReducer(
    recipeReducer,
    initialState
  );

  useEffect(() => {
    const getData = async () => {
      const sendHttp = async () => {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );

        if (!response.ok) {
          throw new Error("Couldn't fetch.");
        }

        const responseData = await response.json();
        return responseData;
      };

      try {
        const data = await sendHttp();
        dispatchRecipeData({ type: "SUCCESS", payload: data.meals });
      } catch (error) {
        dispatchRecipeData({ type: "ERROR", payload: error.message });
      }
    };

    getData();
  }, [id]);

  const transformPara = (str) => {
    const paraArray = str.split("STEP");
    return paraArray.map((p) => {
      if (p && p.length > 20) {
        const firstL = p.charAt(1);
        console.log(firstL);

        return (
          <p className="mb-6 text-primaryBlackText" key={firstL}>
            {p}
          </p>
        );
      }
    });
  };

  function getId(url) {
    var regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = url.match(regExp);

    if (match && match[2].length == 11) {
      return match[2];
    } else {
      return "error";
    }
  }

  let content = (
    <div className="w-full h-screen flex justify-center items-center">
      <LoadingSpinner />
    </div>
  );

  if (!recipeData.isLoading && recipeData.error) {
    content = (
      <p className="text-xl text-red-800 mt-10 min-h-screen">
        Something went wrong. Try to refresh again!
      </p>
    );
  }

  if (!recipeData.isLoading && !recipeData.error) {
    content = (
      <>
        <h4 className="mt-6 mb-10 text-2xl ">
          Instructions for cooking{" "}
          <a href="#vd" className="font-semibold underline underline-offset-2">
            {recipeData.instructions[0].strMeal}
          </a>
        </h4>
        <div className="flex justify-center mb-10">
          <img
            className="w-40 rounded-sm shadow-md border-l-4 border-primary border-dashed"
            src={recipeData.instructions[0].strMealThumb}
            alt="meal"
          />
        </div>{" "}
        <div className="md:columns-3 gap-6 text-justify ">
          {transformPara(recipeData.instructions[0].strInstructions)}
        </div>
        <div className="py-12 " id="vd">
          <iframe
            width="716"
            height="403"
            className=" w-full "
            src={
              "https://www.youtube.com/embed/" +
              getId(recipeData.instructions[0].strYoutube)
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
