import { ingredientsSlice } from "../slice/ingredientsSlice";
import { deleteCookie } from "../../utils/cookies/deleteCookie";
import { Dispatch } from "../../interfaces";

export const logoutUserThunk = () => {
  return async function (dispatch: Dispatch) {
    dispatch(ingredientsSlice.actions._LOGOUT_USER_REQUEST("Loading"));
    deleteCookie("token");
    deleteCookie("accessToken");
  };
};
