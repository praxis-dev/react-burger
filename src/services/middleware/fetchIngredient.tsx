import { GetIngredients } from "../api/getIngredients";
import { ingredientsSlice } from "../slice/ingredientsSlice";

export const fetchIngredients = () => {
  return function (dispatch: any) {
    dispatch(ingredientsSlice.actions._INGREDIENTS_REQUEST());
    GetIngredients()
      .then((data: any) => {
        dispatch(ingredientsSlice.actions._INGREDIENTS_SUCCESS(data.data));
      })
      .catch((error: any) => {
        dispatch(ingredientsSlice.actions._INGREDIENTS_ERROR(error.message));
      });
  };
};
