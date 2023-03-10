import css from "./OrderDetails.module.css";
import done from "../../images/done.svg";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from "react-redux";
import { ingredientsSlice } from "../../services/slice/ingredientsSlice";
import { useDispatch } from "react-redux";

function OrderDetails() {
  const dispatch = useDispatch();
  const modal = useSelector((state: any) => state.ingredients.modal);

  const setModal = (value: boolean) => {
    dispatch(ingredientsSlice.actions._MODAL(value));
  };

  const orderNumber = useSelector(
    (state: any) => state.ingredients.orderNumber
  );

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className={css.modalContent}>
      <h2 className={css.orderIdentifier}>{orderNumber}</h2>
      <p className={css.orderIdentifierText}>идентификатор заказа</p>
      <img src={done} alt="Иконка заказа" className={css.doneIcon} />
      <p className={css.orderText}>Ваш заказ начали готовить</p>
      <p className={css.awaitText}>
        Дождитесь готовности на орбитальной станции
      </p>
      <div className={css.closeModal} onClick={toggleModal}>
        <CloseIcon type="primary" />
      </div>
    </div>
  );
}

export default OrderDetails;
