import css from "./Popup.module.css";
import ReactDOM from "react-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { ingredientsSlice } from "../../services/slice/ingredientsSlice";
import { store } from "../../services/store/Store";
import { useCallback } from "react";
import { IngredientDetails } from "../IngredientDetails/IngredientDetails";
import OrderDetails from "../OrderDetails/OrderDetails";
import { useNavigate } from "react-router-dom";
import IngredientDetailsPage from "../IngredientDetailsPage/IngredientDetailsPage";
import { useParams } from "react-router-dom";

export function Popup() {
  const modal = useSelector((state: any) => state.ingredients.modal);

  const modalType = useSelector((state: any) => state.ingredients.modalType);

  const render =
    modalType === "ingredient" ? <IngredientDetails /> : <OrderDetails />;

  const setModal = useCallback((value: boolean) => {
    store.dispatch(ingredientsSlice.actions._MODAL(value));
  }, []);
  const navigate = useNavigate();

  const resetURL = () => {
    navigate("/react-burger");
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

  return modal ? (
    ReactDOM.createPortal(
      <>
        <div onClick={toggleModal} className={css.overlay}></div>
        {render}
      </>,
      document.getElementById("portal") as Element
    )
  ) : (
    <IngredientDetailsPage />
  );
}

export default Popup;
