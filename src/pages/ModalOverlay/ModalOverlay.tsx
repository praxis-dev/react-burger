import css from "./ModalOverlay.module.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setModal } from "../../utils/modal/setModal";

export const ModalOverlay = ({ children }: any) => {
  const navigate = useNavigate();

  const homeRoute = useSelector((state: any) => state.ingredients.homeRoute);

  const modal = useSelector((state: any) => state.ingredients.modal);

  const resetURL = () => {
    navigate(homeRoute);
  };

  const toggleModal = () => {
    setModal(!modal);
    resetURL();
  };
  return (
    <div className={css.overlay} onClick={toggleModal}>
      {children}
    </div>
  );
};
