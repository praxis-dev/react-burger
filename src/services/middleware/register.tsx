import { registerNewUser } from "../api/registerNewUser";
import { registerSlice } from "../slice/registerSlice";

export const register = (name: string, email: string, password: string) => {
  return function (dispatch: any) {
    dispatch(registerSlice.actions._REGISTER_REQUEST());
    registerNewUser(name, email, password)
      .then((data: any) => {
        dispatch(registerSlice.actions._REGISTER_SUCCESS(data));
      })
      .catch((error: any) => {
        dispatch(registerSlice.actions._REGISTER_ERROR(error.message));
      });
  };
};
