import { ingredientsSlice } from "../slice/ingredientsSlice";
import { authUserApi } from "../api/authUserApi";
import { setCookie } from "../../utils/cookies/setCookie";

export const authUserMiddleware = (data: any) => {
  return async function (dispatch: any) {
    dispatch(ingredientsSlice.actions._LOGIN_REQUEST("Loading"));
    const result = await authUserApi(data);
    if (!result.ok) {
      dispatch(ingredientsSlice.actions._LOGIN_ERROR(result.statusText));
    }
    const res = await result.json();
    dispatch(ingredientsSlice.actions._LOGIN_SUCCESS(res));
    data.onResponse(res);
    // need to save refresh token and access token in cookies
    setCookie("accessToken", res.accessToken, { "max-age": 1200 });

    setCookie("token", res.refreshToken, { "max-age": 1200 });
  };
};
