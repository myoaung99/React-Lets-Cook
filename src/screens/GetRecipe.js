import React, { useEffect, useReducer, useState } from "react";
import ResultRecipe from "../components/GetRecipe/ResultRecipe";
import SearchRecipe from "../components/GetRecipe/SearchRecipe";

const initialState = {
  recipes: null,
  isLoading: false,
  error: null,
};

const recipeReducer = (state, action) => {
  if (action.type === "LOADING") {
    return {
      recipes: null,
      isLoading: true,
      error: null,
    };
  }

  if (action.type === "SUCCESS") {
    return {
      recipess: action.payload,
      isLoading: false,
      error: null,
    };
  }

  if (action.type === "ERROR") {
    return {
      recipes: null,
      isLoading: false,
      error: action.payload,
    };
  }
  return initialState;
};

const GetRecipe = () => {
  const [searchText, setSearchText] = useState();
  const [mealsState, dispatchMealsState] = useReducer(
    recipeReducer,
    initialState
  );

  const getSearchText = (text) => {
    setSearchText(text);
  };

  useEffect(() => {
    const getData = async () => {
      // for initial evaluation
      if (!searchText) {
        return;
      }

      const sendHttp = async () => {
        dispatchMealsState({ type: "LOADING" });
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchText}`
        );

        if (!response.ok) {
          throw new Error("Couldn't fetch.");
        }

        const responseData = await response.json();
        return responseData;
      };

      try {
        const data = await sendHttp();
        dispatchMealsState({ type: "SUCCESS", payload: data.meals });
      } catch (error) {
        dispatchMealsState({ type: "ERROR", payload: error.message });
      }
    };

    getData();
  }, [searchText]);

  console.log(mealsState);

  return (
    <>
      <SearchRecipe onSearch={getSearchText} />
      <ResultRecipe recipes={mealsState} />
    </>
  );
};

export default GetRecipe;
