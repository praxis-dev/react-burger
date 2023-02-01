import css from "./IngredientDetails.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import { useSelector } from "react-redux";
import { ingredientsSlice } from "../../services/slice/ingredientsSlice";
import { store } from "../../services/store/Store";

function IngredientDetails() {
  const [modal, setModal] = useState(false);

  const input = useSelector(
    (state: any) => state.ingredients.ingredientPopupData
  );

  const toggleModal = () => {
    setModal(!modal);
  };

  const onClick = () => {
    store.dispatch(ingredientsSlice.actions.ingredientDataForPopup({}));
    toggleModal();
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
            src={input.image_large}
            alt="иконка компонент"
            className={css.modalImage}
          />
          <p className={css.modalDescription}>{input.name}</p>
          <div className={css.modalNutritional}>
            <div className={css.modalNutritionalTitle}>Калории,ккал</div>
            <div className={css.modalNutritionalTitle}>Белки, г</div>
            <div className={css.modalNutritionalTitle}>Жиры, г</div>
            <div className={css.modalNutritionalTitle}>Углеводы, г</div>
            <div className={css.modalNutritionalValue}>{input.calories}</div>
            <div className={css.modalNutritionalValue}>{input.proteins}</div>
            <div className={css.modalNutritionalValue}>{input.fat}</div>
            <div className={css.modalNutritionalValue}>
              {input.carbohydrates}
            </div>
          </div>
          <div className={css.closeModal} onClick={onClick}>
            <CloseIcon type="primary" />
          </div>
        </div>
      </>
    ),
  };
}

export default IngredientDetails;
