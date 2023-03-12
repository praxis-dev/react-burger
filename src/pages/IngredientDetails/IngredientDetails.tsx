import css from "./IngredientDetails.module.css";
import { useSelector } from "react-redux";

export function IngredientDetails() {
  const input = useSelector(
    (state: any) => state.ingredients.ingredientModalData
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

export default IngredientDetails;