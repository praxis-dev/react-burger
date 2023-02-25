import { useSelector } from "react-redux";

export const AuthCheck = () => {
  const userData = useSelector((state: any) => state.ingredients.userData);
  console.log(`logged in as ${userData}`);
};
