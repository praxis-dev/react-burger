import { getIngredients } from "../api/getIngredients";
import { ingredientsSlice } from "../slice/ingredientsSlice";

export const fetchIngredientsMiddleware = () => {
  return function (dispatch: any) {
    dispatch(ingredientsSlice.actions._INGREDIENTS_REQUEST());
    getIngredients()
      .then((data: any) => {
        dispatch(ingredientsSlice.actions._INGREDIENTS_SUCCESS(data.data));
      })
      .catch((error: any) => {
        dispatch(ingredientsSlice.actions._INGREDIENTS_ERROR(error.message));
      });
  };
};
