import { logoutUserApi } from "../api/logoutUserApi";
import { ingredientsSlice } from "../slice/ingredientsSlice";
import { deleteCookie } from "../../utils/cookies/deleteCookie";

export const logoutUserMiddleware = () => {
  return async function (dispatch: any) {
    dispatch(ingredientsSlice.actions._LOGOUT_USER_REQUEST("Loading"));
    const result = await logoutUserApi();
    if (!result.ok) {
      dispatch(ingredientsSlice.actions._LOGOUT_USER_ERROR(result.statusText));
    }
    dispatch(ingredientsSlice.actions._LOGOUT_USER_SUCCESS());
    deleteCookie("token");
    deleteCookie("accessToken");
  };
};
