import { Dispatch } from "../../interfaces";
import { registerNewUserApi } from "../api/registerNewUserApi";
import { ingredientsSlice } from "../slice/ingredientsSlice";
import { registerNewUserThunkData } from "../../interfaces";

export const registerNewUserThunk = (data: registerNewUserThunkData) => {
  return function (dispatch: Dispatch) {
    dispatch(ingredientsSlice.actions._REGISTER_REQUEST("Loading"));

    registerNewUserApi(data)
      .then((result) => {
        dispatch(ingredientsSlice.actions._REGISTER_SUCCESS(result));
        data.onResponse(result);
      })
      .catch((error) => {
        if (error instanceof Error) {
          dispatch(ingredientsSlice.actions._REGISTER_ERROR(error.message));
        } else {
          dispatch(
            ingredientsSlice.actions._REGISTER_ERROR(
              "An unknown error occurred."
            )
          );
        }
      });
  };
};
