import { updateUserDataApi } from "../api/updateUserDataApi";
import { ingredientsSlice } from "../slice/ingredientsSlice";
import { updateUserThunkData } from "../../interfaces";

export const updateUserThunk = (data: updateUserThunkData) => {
  return async function (dispatch: any) {
    dispatch(ingredientsSlice.actions._UPDATE_USER_REQUEST("Loading"));
    const result = await updateUserDataApi(data);

    dispatch(ingredientsSlice.actions._UPDATE_USER_SUCCESS(result.user));
  };
};
