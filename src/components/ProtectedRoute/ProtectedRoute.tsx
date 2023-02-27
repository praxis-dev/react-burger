import { Navigate } from "react-router-dom";
import { ReactNode } from "react";
import { getCookie } from "../../utils/cookies/getCookie";
import { ingredientsSlice } from "../../services/slice/ingredientsSlice";
import { store } from "../../services/store/Store";
import { useLocation } from "react-router-dom";

export function ProtectedRoute({ element }: { element: ReactNode }) {
  console.log("ProtectedRoute: ", getCookie("token"));
  const location = useLocation();

  if (getCookie("token") === undefined) {
    console.log("ProtectedRoute: ", location.pathname);
    store.dispatch(
      ingredientsSlice.actions._UPDATE_INITIAL_LOCATION(location.pathname)
    );

    return <Navigate to="/react-burger/login" />;
  }

  return <>{element}</>;
}
