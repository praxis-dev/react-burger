import css from "./IngredientDetailsPage.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from "react-redux";
import { ingredientsSlice } from "../../../services/slice/ingredientsSlice";
import { store } from "../../../services/store/Store";

function IngredientDetailsPage() {
  const input = useSelector(
    (state: any) => state.ingredients.ingredientPopupData
  );

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
      </div>
    </>
  );
}

export default IngredientDetailsPage;
