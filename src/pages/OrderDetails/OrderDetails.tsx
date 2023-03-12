import css from "./OrderDetails.module.css";
import done from "../../images/done.svg";
import { useSelector } from "react-redux";

function OrderDetails() {
  const orderNumber = useSelector(
    (state: any) => state.ingredients.orderNumber
  );

  return (
    <div className={css.modalContent}>
      <h2 className={css.orderIdentifier}>{orderNumber}</h2>
      <p className={css.orderIdentifierText}>идентификатор заказа</p>
      <img src={done} alt="Иконка заказа" className={css.doneIcon} />
      <p className={css.orderText}>Ваш заказ начали готовить</p>
      <p className={css.awaitText}>
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
}

export default OrderDetails;
