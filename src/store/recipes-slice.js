import { createSlice } from "@reduxjs/toolkit";

const recipesSlice = createSlice({
  name: "recipes",
  initialState: {
    recipes: [],
    errors: null,
    isLoading: true,
  },
  reducers: {
    addRecipe(state, action) {
      state.recipes = action.payload;
      state.isLoading = false;
    },
    errors(state, action) {
      state.errors = action.payload;
      state.isLoading = true;
    },
  },
});

export const recipeActions = recipesSlice.actions;
export default recipesSlice;
