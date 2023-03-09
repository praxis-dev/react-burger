import { getIngredientsApi } from "../api/getIngredientsApi";
import { ingredientsSlice } from "../slice/ingredientsSlice";

export const fetchIngredientsThunk = () => {
  return function (dispatch: any) {
    dispatch(ingredientsSlice.actions._INGREDIENTS_REQUEST());
    getIngredientsApi()
      .then((data: any) => {
        dispatch(ingredientsSlice.actions._INGREDIENTS_SUCCESS(data.data));
      })
      .catch((error: any) => {
        dispatch(ingredientsSlice.actions._INGREDIENTS_ERROR(error.message));
      });
  };
};
