import React, { useEffect, useReducer, useState, lazy, Suspense } from "react";
import RecipeCard from "../components/GetRecipe/RecipeCard";
import SearchRecipe from "../components/GetRecipe/SearchRecipe";
import LoadingSpinner from "../components/UI/LoadingSpinner";

// lazylaoding
const Pagination = lazy(() => import("../components/UI/Pagination"));

// fetch recipe initial state
const initialState = {
  recipes: null,
  isLoading: false,
  error: null,
  fetched: false,
};

// fetch recipe reducer logic
const recipeReducer = (state, action) => {
  if (action.type === "LOADING") {
    return {
      recipes: null,
      isLoading: true,
      errors: null,
    };
  }

  if (action.type === "SUCCESS") {
    return {
      recipes: action.payload,
      isLoading: false,
      errors: null,
      fetched: true,
    };
  }

  if (action.type === "ERROR") {
    return {
      recipes: null,
      isLoading: false,
      errors: action.payload,
      fetched: true,
    };
  }
  return initialState;
};

const GetRecipe = () => {
  const [searchText, setSearchText] = useState();

  // fetch meal local state
  const [mealsState, dispatchMealsState] = useReducer(
    recipeReducer,
    initialState
  );

  // get search text from child component through props
  const getSearchText = (text) => {
    setSearchText(text);
  };

  // scroll to top
  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: "0px" });
  }, []);

  // search လုပ်မယ့်စာ ရတာနဲ့ re-evaluate
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

        console.log(response);

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

  let content = (
    <div className="w-full h-full flex justify-center items-center">
      <p className="text-xl text-center text-gray-500">Try something new !!</p>
    </div>
  );

  if (mealsState.errors && !mealsState.isLoading) {
    content = (
      <p className="text-2xl  font-bold text-center">
        Couldn't Fetch Meals. Try refresh again!
      </p>
    );
  }

  if (mealsState.isLoading) {
    content = (
      <div className="w-full h-full flex justify-center items-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (mealsState.fetched && !mealsState.recipes) {
    content = (
      <div className="w-full h-full flex flex-col justify-center items-center">
        <p className="text-xl text-center text-gray-500">No such recipes </p>
      </div>
    );
  }

  if (mealsState.recipes && !mealsState.errors) {
    content = (
      <>
        <p className="text-xl text-center mb-10">
          Search result for :{" "}
          <span className="text-primary font-bold">{searchText}</span>
        </p>

        {/* <RecipeCard /> */}
        <Pagination
          data={mealsState.recipes}
          RenderComponent={RecipeCard}
          title="meals"
          pageLimit={3}
          dataLimit={6}
        />
      </>
    );
  }

  return (
    <>
      <SearchRecipe onSearch={getSearchText} />
      <section className="container mx-auto  mt-10 min-h-screen">
        <Suspense
          fallback={
            <div className="w-full h-screen flex justify-center items-center">
              <LoadingSpinner />
            </div>
          }
        ></Suspense>
        {content}
      </section>
    </>
  );
};

export default GetRecipe;
