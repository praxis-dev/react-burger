import css from "./OrderDetails.module.css";
import done from "../../images/done.svg";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ReactDOM from "react-dom";

function OrderDetails(props: any) {
  const { modal, toggleModal } = props;

  if (!modal) return null;
  return ReactDOM.createPortal(
    <>
      <div onClick={toggleModal} className={css.overlay}></div>
      <div className={css.modalContent}>
        <h2 className={css.orderIdentifier}>7777</h2>
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
    </>,
    document.getElementById("portal") as Element
  );
}

export default OrderDetails;
