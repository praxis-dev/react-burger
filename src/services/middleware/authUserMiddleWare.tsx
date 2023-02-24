import { ingredientsSlice } from "../slice/ingredientsSlice";
import { authUserApi } from "../api/authUserApi";

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
  };
};

// dispatch(ingredientsSlice.actions._REGISTER_REQUEST("Loading"));
// const result = await registerNewUserApi(data);
// if (!result.ok) {
//   dispatch(ingredientsSlice.actions._REGISTER_ERROR(result.statusText));
// }
// const res = await result.json();
// dispatch(ingredientsSlice.actions._REGISTER_SUCCESS(res));
// data.onResponse(res);
