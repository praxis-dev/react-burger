import { useSelector } from "react-redux";

export const AuthCheck = () => {
  const userData = useSelector((state: any) => state.ingredients.userData);
  if (userData && userData.success) {
    console.log("success", userData);
  } else {
    console.log("faliure", userData);
  }
};
