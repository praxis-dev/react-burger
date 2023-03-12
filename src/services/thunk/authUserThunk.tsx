import { ingredientsSlice } from "../slice/ingredientsSlice";
import { authUserApi } from "../api/authUserApi";
import { setCookie } from "../../utils/cookies/setCookie";
import { Dispatch } from "../../interfaces";

export const authUserThunk = (data: any) => {
  return function (dispatch: Dispatch) {
    dispatch(ingredientsSlice.actions._LOGIN_REQUEST("Loading"));
    authUserApi(data)
      .then((res) => {
        dispatch(ingredientsSlice.actions._LOGIN_SUCCESS(res));
        data.onResponse(res);
        setCookie("accessToken", res.accessToken, { "max-age": 1200 });
        setCookie("token", res.refreshToken, { "max-age": 1200 });
      })
      .catch((error) => {
        if (error instanceof Error) {
          dispatch(ingredientsSlice.actions._LOGIN_ERROR(error.message));
        } else {
          dispatch(
            ingredientsSlice.actions._LOGIN_ERROR("An unknown error occurred")
          );
        }
      });
  };
};
