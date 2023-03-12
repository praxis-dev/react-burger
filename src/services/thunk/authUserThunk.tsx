import { ingredientsSlice } from "../slice/ingredientsSlice";
import { authUserApi } from "../api/authUserApi";
import { setCookie } from "../../utils/cookies/setCookie";
import { Dispatch } from "../../interfaces";

export const authUserThunk = (data: any) => {
  return async function (dispatch: Dispatch) {
    dispatch(ingredientsSlice.actions._LOGIN_REQUEST("Loading"));
    try {
      const res = await authUserApi(data);

      dispatch(ingredientsSlice.actions._LOGIN_SUCCESS(res));
      data.onResponse(res);
      setCookie("accessToken", res.accessToken, { "max-age": 1200 });
      setCookie("token", res.refreshToken, { "max-age": 1200 });
    } catch (error) {
      dispatch(ingredientsSlice.actions._LOGIN_ERROR((error as Error).message));
    }
  };
};
