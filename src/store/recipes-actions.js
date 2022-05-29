import { recipeActions } from "./recipes-slice";

export const fetchRecipeData = (id) => {
  return async (dispatch) => {
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
      dispatch(recipeActions.addRecipe(data.meals));
    } catch (error) {
      dispatch(recipeActions.errors(error.message));
    }
  };
};
