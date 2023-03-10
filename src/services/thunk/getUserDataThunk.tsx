import { getUserDataApi } from "../api/getUserDataApi";
import { ingredientsSlice } from "../slice/ingredientsSlice";

export const getUserDataThunk = () => {
  return async function (dispatch: any) {
    dispatch(ingredientsSlice.actions._GET_USER_DATA_REQUEST("Loading"));
    const result = await getUserDataApi();

    dispatch(ingredientsSlice.actions._GET_USER_DATA_SUCCESS(result.user));
  };
};