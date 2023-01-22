import css from "./IngredientDetails.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";

type props = {
  image_large: string;
  name: string;
  calories: number;
  proteins: number;
  fat: number;
  carbohydrates: number;
};

function IngredientDetails(props: props) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return {
    modal,
    setModal,
    toggleModal,
    render: (
      <>
        <div className={css.modalContent}>
          <p className={css.modalName}>Детали игредиента</p>
          <img
            src={props.image_large}
            alt="иконка компонент"
            className={css.modalImage}
          />
          <p className={css.modalDescription}>{props.name}</p>
          <div className={css.modalNutritional}>
            <div className={css.modalNutritionalTitle}>Калории,ккал</div>
            <div className={css.modalNutritionalTitle}>Белки, г</div>
            <div className={css.modalNutritionalTitle}>Жиры, г</div>
            <div className={css.modalNutritionalTitle}>Углеводы, г</div>
            <div className={css.modalNutritionalValue}>{props.calories}</div>
            <div className={css.modalNutritionalValue}>{props.proteins}</div>
            <div className={css.modalNutritionalValue}>{props.fat}</div>
            <div className={css.modalNutritionalValue}>
              {props.carbohydrates}
            </div>
          </div>
          <div className={css.closeModal} onClick={toggleModal}>
            <CloseIcon type="primary" />
          </div>
        </div>
      </>
    ),
  };
}

export default IngredientDetails;
