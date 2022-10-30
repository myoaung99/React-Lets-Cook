import React, { useEffect, useState, lazy, Suspense } from "react";
import RecipeCard from "../components/GetRecipe/RecipeCard";
import SearchRecipe from "../components/GetRecipe/SearchRecipe";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useQuery } from "react-query";
import { setCookie, getAllCookies, removeCookie } from "react-cookie";
import {
  getLocalStorageWithExpiry,
  setLocalStorageWithExpiry,
} from "../services/local-storage";

// lazylaoding
const Pagination = lazy(() => import("../components/UI/Pagination"));

// `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchText}`

const getRecipeVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  exit: {
    x: "100vw",
  },
};

const fetchMeals = async ({ queryKey }) => {
  const [key, { searchText }] = queryKey;
  if (searchText) {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchText}`
    );
    return res.json();
  }
};

const GetRecipe = () => {
  const [searchText, setSearchText] = useState(null);

  const { data, status } = useQuery(["meals", { searchText }], fetchMeals);

  // get search text from child component through props
  const getSearchText = (text) => {
    setSearchText(text);
  };

  useEffect(() => {
    if (searchText) {
      // window.localStorage.setItem("MEAL_SEARCH_TEXT", searchText);
      setLocalStorageWithExpiry("MEAL_SEARCH_TEXT", searchText, 100000);
    }
  }, [searchText]);

  useEffect(() => {
    const search = getLocalStorageWithExpiry("MEAL_SEARCH_TEXT");
    if (search !== null) setSearchText(search);
  }, []);

  // scroll to top
  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: "0px" });
  }, []);

  let content = (
    <div className="w-full h-full flex justify-center items-center">
      <p className="text-xl text-center text-gray-500">Try something new !!</p>
    </div>
  );

  if (status === "loading") {
    content = (
      <div className="w-full h-full flex justify-center items-center">
        <LoadingSpinner />
      </div>
    );
  } else if (status === "error") {
    content = (
      <p className="text-2xl  font-bold text-center">
        Couldn't Fetch Meals. Try refresh again!
      </p>
    );
  } else if (status === "success" && data && data.meals) {
    content = (
      <>
        <p className="text-xl text-center mb-10">
          Searched results for :{" "}
          <span className="text-primary font-bold">{searchText}</span>
        </p>

        {/* <RecipeCard /> */}
        <Pagination
          data={data.meals}
          RenderComponent={RecipeCard}
          title="meals"
          pageLimit={3}
          dataLimit={6}
        />
      </>
    );
  }

  return (
    <motion.div
      variants={getRecipeVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
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
    </motion.div>
  );
};

export default GetRecipe;
