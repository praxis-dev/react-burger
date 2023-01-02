import css from "./OrderDetails.module.css";
import done from "../../images/done.svg";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

type props = { toggleModal: () => void };

function OrderDetails(props: props) {
  const { toggleModal } = props;

  return (
    <>
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
    </>
  );
}

export default OrderDetails;
