import { Dispatch } from "../../interfaces";
import { getUserDataApi } from "../api/getUserDataApi";
import { ingredientsSlice } from "../slice/ingredientsSlice";

export const getUserDataThunk = () => {
  return function (dispatch: Dispatch) {
    dispatch(ingredientsSlice.actions._GET_USER_DATA_REQUEST("Loading"));
    getUserDataApi()
      .then((result) => {
        dispatch(ingredientsSlice.actions._GET_USER_DATA_SUCCESS(result.user));
      })
      .catch((error) => {
        if (error instanceof Error) {
          dispatch(
            ingredientsSlice.actions._GET_USER_DATA_ERROR(error.message)
          );
        } else {
          dispatch(
            ingredientsSlice.actions._GET_USER_DATA_ERROR(
              "An unknown error occurred."
            )
          );
        }
      });
  };
};
