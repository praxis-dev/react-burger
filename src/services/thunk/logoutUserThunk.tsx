import { logoutUserApi } from "../api/logoutUserApi";
import { ingredientsSlice } from "../slice/ingredientsSlice";
import { deleteCookie } from "../../utils/cookies/deleteCookie";
import { dispatch } from "../../interfaces";

export const logoutUserThunk = () => {
  return async function (dispatch: dispatch) {
    dispatch(ingredientsSlice.actions._LOGOUT_USER_REQUEST("Loading"));
    const result = await logoutUserApi();
    deleteCookie("token");
    deleteCookie("accessToken");
  };
};
