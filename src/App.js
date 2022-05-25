import "./App.css";
import Home from "./screens/Home";
import GetRecipe from "./screens/GetRecipe";
import Layout from "./components/Layout/Layout";
import { Routes, Route } from "react-router-dom";
import DetailRecipe from "./screens/DetailRecipe";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/get-recipe" element={<GetRecipe />} />
          <Route path="/get-recipe/:recipeId" element={<DetailRecipe />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
