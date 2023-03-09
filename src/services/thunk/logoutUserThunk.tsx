import { logoutUserApi } from "../api/logoutUserApi";
import { ingredientsSlice } from "../slice/ingredientsSlice";
import { deleteCookie } from "../../utils/cookies/deleteCookie";

export const logoutUserThunk = () => {
  return async function (dispatch: any) {
    dispatch(ingredientsSlice.actions._LOGOUT_USER_REQUEST("Loading"));
    const result = await logoutUserApi();
    deleteCookie("token");
    deleteCookie("accessToken");
  };
};
