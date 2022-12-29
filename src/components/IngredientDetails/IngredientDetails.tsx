import css from "./IngredientDetails.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import test from "../../images/meat-01.png";

function IngredientDetails(props: any) {
  const { toggleModal } = props;
  return (
    <>
      <div className={css.modalContent}>
        <p className={css.modalName}>Детали игредиента</p>
        <img src={test} alt="иконка компонент" className={css.modalImage} />
        <p className={css.modalDescription}>Краторная булка N-200i (верх)</p>
        <div className={css.modalNutritional}>
          <div className={css.modalNutritionalTitle}>Калории,ккал</div>
          <div className={css.modalNutritionalTitle}>Белки, г</div>
          <div className={css.modalNutritionalTitle}>Жиры, г</div>
          <div className={css.modalNutritionalTitle}>Углеводы, г</div>
          <div className={css.modalNutritionalValue}>777</div>
          <div className={css.modalNutritionalValue}>777</div>
          <div className={css.modalNutritionalValue}>777</div>
          <div className={css.modalNutritionalValue}>777</div>
        </div>
        <div className={css.closeModal} onClick={toggleModal}>
          <CloseIcon type="primary" />
        </div>
      </div>
    </>
  );
}

export default IngredientDetails;
