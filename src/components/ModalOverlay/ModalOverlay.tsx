import css from "./ModalOverlay.module.css";
import { useCallback } from "react";
import { store } from "../../services/store/Store";
import { ingredientsSlice } from "../../services/slice/ingredientsSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const ModalOverlay = ({ children }: any) => {
  const navigate = useNavigate();

  const homeRoute = useSelector((state: any) => state.ingredients.homeRoute);

  const modal = useSelector((state: any) => state.ingredients.modal);

  const setModal = useCallback((value: boolean) => {
    store.dispatch(ingredientsSlice.actions._MODAL(value));
  }, []);

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
