import css from "./IngredientDetails.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

type props = {
  toggleModal: () => void;
  specificProps: {
    image_large: string;
    name: string;
    calories: number;
    proteins: number;
    fat: number;
    carbohydrates: number;
  };
};

function IngredientDetails(props: props) {
  const { toggleModal, specificProps } = props;

  return (
    <>
      <div className={css.modalContent}>
        <p className={css.modalName}>Детали игредиента</p>
        <img
          src={specificProps.image_large}
          alt="иконка компонент"
          className={css.modalImage}
        />
        <p className={css.modalDescription}>{specificProps.name}</p>
        <div className={css.modalNutritional}>
          <div className={css.modalNutritionalTitle}>Калории,ккал</div>
          <div className={css.modalNutritionalTitle}>Белки, г</div>
          <div className={css.modalNutritionalTitle}>Жиры, г</div>
          <div className={css.modalNutritionalTitle}>Углеводы, г</div>
          <div className={css.modalNutritionalValue}>
            {specificProps.calories}
          </div>
          <div className={css.modalNutritionalValue}>
            {specificProps.proteins}
          </div>
          <div className={css.modalNutritionalValue}>{specificProps.fat}</div>
          <div className={css.modalNutritionalValue}>
            {specificProps.carbohydrates}
          </div>
        </div>
        <div className={css.closeModal} onClick={toggleModal}>
          <CloseIcon type="primary" />
        </div>
      </div>
    </>
  );
}

export default IngredientDetails;
