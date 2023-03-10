import css from "./Popup.module.css";
import ReactDOM from "react-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { ingredientsSlice } from "../../services/slice/ingredientsSlice";
import { store } from "../../services/store/Store";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { ModalOverlay } from "../ModalOverlay/ModalOverlay";

export const Popup = ({ children }: any) => {
  const modal = useSelector((state: any) => state.ingredients.modal);

  const homeRoute = useSelector((state: any) => state.ingredients.homeRoute);

  const setModal = useCallback((value: boolean) => {
    store.dispatch(ingredientsSlice.actions._MODAL(value));
  }, []);
  const navigate = useNavigate();

  const resetURL = () => {
    navigate(homeRoute);
  };

  const toggleModal = () => {
    setModal(!modal);
    resetURL();
  };

  useEffect(() => {
    function handleEscapeKey(event: KeyboardEvent) {
      if (event.code === "Escape") {
        setModal(false);
        resetURL();
      }
    }

    document.addEventListener("keydown", handleEscapeKey);

    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, [setModal]);

  return ReactDOM.createPortal(
    <>
      <ModalOverlay onClick={toggleModal}> {children}</ModalOverlay>
    </>,
    document.getElementById("portal") as Element
  );
};

export default Popup;
