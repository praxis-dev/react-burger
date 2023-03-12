import { ingredientsSlice } from "../slice/ingredientsSlice";
import { deleteCookie } from "../../utils/cookies/deleteCookie";
import { Dispatch } from "../../interfaces";

export const logoutUserThunk = () => {
  return function (dispatch: Dispatch) {
    dispatch(ingredientsSlice.actions._LOGOUT_USER_REQUEST("Loading"));
    deleteCookie("token");
    deleteCookie("accessToken");
    Promise.resolve()
      .then(() => {
        dispatch(ingredientsSlice.actions._LOGOUT_USER_SUCCESS());
      })
      .catch((error) => {
        if (error instanceof Error) {
          dispatch(ingredientsSlice.actions._LOGOUT_USER_ERROR(error.message));
        } else {
          dispatch(
            ingredientsSlice.actions._LOGOUT_USER_ERROR(
              "An unknown error occurred."
            )
          );
        }
      });
  };
};
