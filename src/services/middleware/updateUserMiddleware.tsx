import { updateUserDataApi } from "../api/updateUserDataApi";
import { ingredientsSlice } from "../slice/ingredientsSlice";

export const updateUserMiddleware = (data: any) => {
  return async function (dispatch: any) {
    dispatch(ingredientsSlice.actions._UPDATE_USER_REQUEST("Loading"));
    const result = await updateUserDataApi(data);
    if (!result.ok) {
      dispatch(ingredientsSlice.actions._UPDATE_USER_ERROR(result.statusText));
    }
    dispatch(ingredientsSlice.actions._UPDATE_USER_SUCCESS(result.user));
  };
};
