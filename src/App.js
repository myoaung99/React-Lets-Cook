import "./App.css";
import React, { lazy, Suspense, useEffect } from "react";
import Home from "./screens/Home";
import Layout from "./components/Layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";
import { Routes, Route, useLocation } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { AnimatePresence } from "framer-motion";

// lazyloading
const GetRecipe = lazy(() => import("./screens/GetRecipe"));
const DetailRecipe = lazy(() => import("./screens/DetailRecipe"));
const FunFacts = lazy(() => import("./screens/FunFacts"));

function App() {
  const location = useLocation();

  return (
    <>
      <Provider store={store}>
        <Suspense
          fallback={
            <div className="w-full h-screen flex justify-center items-center">
              <LoadingSpinner />
            </div>
          }
        >
          <Layout>
            <AnimatePresence exitBeforeEnter>
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/get-recipe" element={<GetRecipe />} />
                <Route
                  path="/detail-recipe/:recipeId"
                  element={<DetailRecipe />}
                />
                <Route path="/fun-facts" element={<FunFacts />} />
              </Routes>
            </AnimatePresence>{" "}
          </Layout>
        </Suspense>
      </Provider>
    </>
  );
}

export default App;
