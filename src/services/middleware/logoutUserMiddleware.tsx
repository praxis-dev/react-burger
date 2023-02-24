import { logoutUserApi } from "../api/logoutUserApi";
import { ingredientsSlice } from "../slice/ingredientsSlice";
import { deleteCookie } from "../../utils/cookies/deleteCookie";
import { getCookie } from "../../utils/cookies/getCookie";

export const logoutUserMiddleware = () => {
  console.log(getCookie("token"));

  return async function (dispatch: any) {
    dispatch(ingredientsSlice.actions._LOGOUT_USER_REQUEST("Loading"));
    const result = await logoutUserApi();
    if (!result.ok) {
      dispatch(ingredientsSlice.actions._LOGOUT_USER_ERROR(result.statusText));
    }
    dispatch(ingredientsSlice.actions._LOGOUT_USER_SUCCESS());
    deleteCookie("token");
    console.log("logoutUserMiddleware: " + document.cookie);
  };
};
