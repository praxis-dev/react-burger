import React from "react";
import { useSelector } from "react-redux";
import { Route } from "react-router-dom";

export const ProtectedRoute = ({ children, ...rest }: any) => {
  // const { authUser } = useSelector((state: any) => state.ingredients);
  // return (
  //   <Route
  //     {...rest}
  //     render={({ location }) =>
  //       authUser ? (
  //         children
  //       ) : (
  //         <Redirect
  //           to={{
  //             pathname: "/login",
  //             state: { from: location },
  //           }}
  //         />
  //       )
  //     }
  //   />
  // );
};
