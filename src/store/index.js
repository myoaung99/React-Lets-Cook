import { configureStore } from "@reduxjs/toolkit";
import recipesSlice from "./recipes-slice";

const store = configureStore({
  reducer: {
    recipe: recipesSlice.reducer,
  },
});

export default store;
