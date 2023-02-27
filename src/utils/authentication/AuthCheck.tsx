import { useSelector } from "react-redux";

export const AuthCheck = () => {
  const userData = useSelector((state: any) => state.ingredients.userData);
  if (userData && userData.email) {
    return true;
  } else {
    return false;
  }
};
