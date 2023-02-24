import { registerNewUserApi } from "../api/registerNewUserApi";
import { ingredientsSlice } from "../slice/ingredientsSlice";

export const registerNewUserMiddleware = (data: any) => {
  return async function (dispatch: any) {
    dispatch(ingredientsSlice.actions._REGISTER_REQUEST("Loading"));

    const result = await registerNewUserApi(data);

    if (!result.ok) {
      dispatch(ingredientsSlice.actions._REGISTER_ERROR(result.statusText));
    }

    const res = await result.json();

    dispatch(ingredientsSlice.actions._REGISTER_SUCCESS(res));

    data.onResponse(res);
  };
};
