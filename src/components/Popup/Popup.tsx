import css from "./Popup.module.css";
import ReactDOM from "react-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { ingredientsSlice } from "../../services/slice/ingredientsSlice";
import { store } from "../../services/store/Store";
import { useCallback } from "react";
import { IngredientDetails } from "../IngredientDetails/IngredientDetails";
import OrderDetails from "../OrderDetails/OrderDetails";

export function Popup() {
  const modal = useSelector((state: any) => state.ingredients.modal);

  const modalType = useSelector((state: any) => state.ingredients.modalType);

  const { render } =
    modalType === "ingredient" ? IngredientDetails() : OrderDetails();

  const setModal = useCallback((value: boolean) => {
    store.dispatch(ingredientsSlice.actions._MODAL(value));
  }, []);

  const toggleModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    function handleEscapeKey(event: KeyboardEvent) {
      if (event.code === "Escape") {
        setModal(false);
      }
    }

    document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, [setModal]);

  if (!modal) return null;
  return ReactDOM.createPortal(
    <>
      <div onClick={toggleModal} className={css.overlay}></div>
      {render}
    </>,
    document.getElementById("portal") as Element
  );
}

export default Popup;
