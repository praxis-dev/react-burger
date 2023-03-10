import css from "./IngredientDetails.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from "react-redux";
import { ingredientsSlice } from "../../services/slice/ingredientsSlice";
import { store } from "../../services/store/Store";
import { useNavigate } from "react-router-dom";

export function IngredientDetails() {
  const modal = useSelector((state: any) => state.ingredients.modal);

  const setModal = (value: boolean) => {
    store.dispatch(ingredientsSlice.actions._MODAL(value));
  };

  const input = useSelector(
    (state: any) => state.ingredients.ingredientModalData
  );

  const toggleModal = () => {
    setModal(!modal);
  };

  const navigate = useNavigate();

  const onClick = () => {
    store.dispatch(ingredientsSlice.actions.ingredientDataForModal({}));
    setModal(false);
    navigate("/react-burger");
  };

  return (
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
          <div className={css.modalNutritionalValue}>{input.carbohydrates}</div>
        </div>
        <div className={css.closeModal} onClick={onClick}>
          <CloseIcon type="primary" />
        </div>
      </div>
    </>
  );
}

export default IngredientDetails;
