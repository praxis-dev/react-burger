import { updateUserDataApi } from "../api/updateUserDataApi";
import { ingredientsSlice } from "../slice/ingredientsSlice";
import { UpdateUserThunkData } from "../../interfaces";
import { Dispatch } from "../../interfaces";

export const updateUserThunk = (data: UpdateUserThunkData) => {
  return function (dispatch: Dispatch) {
    dispatch(ingredientsSlice.actions._UPDATE_USER_REQUEST("Loading"));

    updateUserDataApi(data)
      .then((result) => {
        dispatch(ingredientsSlice.actions._UPDATE_USER_SUCCESS(result.user));
      })
      .catch((error) => {
        if (error instanceof Error) {
          dispatch(ingredientsSlice.actions._UPDATE_USER_ERROR(error.message));
        } else {
          dispatch(
            ingredientsSlice.actions._UPDATE_USER_ERROR(
              "An unknown error occurred."
            )
          );
        }
      });
  };
};
