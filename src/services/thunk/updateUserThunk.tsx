import { updateUserDataApi } from "../api/updateUserDataApi";
import { ingredientsSlice } from "../slice/ingredientsSlice";

export const updateUserThunk = (data: any) => {
  return async function (dispatch: any) {
    dispatch(ingredientsSlice.actions._UPDATE_USER_REQUEST("Loading"));
    const result = await updateUserDataApi(data);

    dispatch(ingredientsSlice.actions._UPDATE_USER_SUCCESS(result.user));
  };
};
