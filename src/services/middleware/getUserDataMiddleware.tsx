import { getUserDataApi } from "../api/getUserDataApi";
import { ingredientsSlice } from "../slice/ingredientsSlice";

export const getUserDataMiddleware = () => {
  return async function (dispatch: any) {
    dispatch(ingredientsSlice.actions._GET_USER_DATA_REQUEST("Loading"));
    const result = await getUserDataApi();
    if (!result.ok) {
      dispatch(
        ingredientsSlice.actions._GET_USER_DATA_ERROR(result.statusText)
      );
    }
    dispatch(ingredientsSlice.actions._GET_USER_DATA_SUCCESS(result.user));
  };
};
