import { ingredientsSlice } from "../slice/ingredientsSlice";
import { authUserApi } from "../api/authUserApi";

const setCookie = (name: string, value: string, options: any = {}) => {
  options = {
    path: "/",
    ...options,
  };

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie =
    encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }

  document.cookie = updatedCookie;
  console.log(document.cookie);
};

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
    setCookie("token", res.refreshToken, { "max-age": 1200 });
  };
};
