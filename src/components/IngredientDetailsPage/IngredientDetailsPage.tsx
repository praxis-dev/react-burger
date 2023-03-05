import css from "./IngredientDetailsPage.module.css";
import { useSelector } from "react-redux";

import { useParams } from "react-router-dom";

function IngredientDetailsPage() {
  const { id } = useParams<{ id: string }>();
  console.log(id);

  const ingredients = useSelector(
    (state: any) => state.ingredients.ingredients
  );
  console.log(ingredients);

  let input = ingredients.find((item: any) => {
    return id === item._id;
  });

  return input ? (
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
  ) : (
    <></>
  );
}

export default IngredientDetailsPage;
