import "./App.css";
import React, { lazy, Suspense } from "react";
import Home from "./screens/Home";
import Layout from "./components/Layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

// lazyloading
const GetRecipe = lazy(() => import("./screens/GetRecipe"));
const DetailRecipe = lazy(() => import("./screens/DetailRecipe"));
const FunFacts = lazy(() => import("./screens/FunFacts"));

function App() {
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
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/get-recipe" element={<GetRecipe />} />
              <Route
                path="/detail-recipe/:recipeId"
                element={<DetailRecipe />}
              />
              <Route path="/fun-facts" element={<FunFacts />} />
            </Routes>
          </Layout>
        </Suspense>
      </Provider>
    </>
  );
}

export default App;
