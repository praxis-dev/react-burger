import { updateUserDataApi } from "../api/updateUserDataApi";
import { ingredientsSlice } from "../slice/ingredientsSlice";
import { UpdateUserThunkData } from "../../interfaces";
import { Dispatch } from "../../interfaces";

export const updateUserThunk = (data: UpdateUserThunkData) => {
  return async function (dispatch: Dispatch) {
    dispatch(ingredientsSlice.actions._UPDATE_USER_REQUEST("Loading"));
    const result = await updateUserDataApi(data);

    dispatch(ingredientsSlice.actions._UPDATE_USER_SUCCESS(result.user));
  };
};
