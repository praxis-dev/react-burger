import css from "./IngredientDetails.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from "react-redux";
import { ingredientsSlice } from "../../services/slice/ingredientsSlice";
import { store } from "../../services/store/Store";

export function IngredientDetails() {
  const modal = useSelector((state: any) => state.ingredients.modal);

  const setModal = (value: boolean) => {
    store.dispatch(ingredientsSlice.actions._MODAL(value));
  };

  const setModalType = (value: string) => {
    store.dispatch(ingredientsSlice.actions._MODAL_TYPE(value));
  };

  const input = useSelector(
    (state: any) => state.ingredients.ingredientPopupData
  );

  const toggleModal = () => {
    setModal(!modal);
  };

  const onClick = () => {
    store.dispatch(ingredientsSlice.actions.ingredientDataForPopup({}));
    setModalType("ingredient");
    toggleModal();
  };

  return {
    render: (
      <>
        <div className={css.modalContent}>
          <p className={css.modalName}>Детали ингредиента</p>
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
