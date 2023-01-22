import css from "./OrderDetails.module.css";
import done from "../../images/done.svg";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import { OrderDetailsContext } from "../Stack/Stack";
import { useContext } from "react";

function OrderDetails() {
  const [modal, setModal] = useState(false);
  const orderNumber = useContext(OrderDetailsContext);
  console.log(`ordernumber in Details: ${orderNumber}`);
  const toggleModal = () => {
    setModal(!modal);
  };

  return {
    modal,
    setModal,
    toggleModal,
    render: (
      <div className={css.modalContent}>
        <h2 className={css.orderIdentifier}>777</h2>
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
    ),
  };
}

export default OrderDetails;
