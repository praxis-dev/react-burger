import { Route, Routes, Navigate } from "react-router-dom";
import { AuthCheck } from "../../utils/authentication/AuthCheck";
import { ReactNode } from "react";
import { getCookie } from "../../utils/cookies/getCookie";

export function ProtectedRoute({ element }: { element: ReactNode }) {
  console.log("ProtectedRoute: ", getCookie("token"));
  if (getCookie("token") === undefined) {
    return <Navigate to="/react-burger/login" />;
  }

  return <>{element}</>;
}
