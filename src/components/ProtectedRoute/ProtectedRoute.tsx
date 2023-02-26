import { Route, Navigate } from "react-router-dom";
import { AuthCheck } from "../../utils/authentication/AuthCheck";

export const ProtectedRoute = ({ component: Component, ...rest }: any) => {
  if (AuthCheck()) {
    console.log(`true = ${AuthCheck()}`);

    return (
      <Route {...rest} render={(props: any) => <Component {...props} />} />
    );
  } else {
    console.log(`false - navigate = ${AuthCheck()}`);

    return <Navigate to="/react-burger/login" />;
  }
};
