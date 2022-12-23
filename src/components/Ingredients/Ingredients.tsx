import IngredientCard from "../IngredientCard/IngredientCard";
import css from "./Ingredients.module.css";
import { useMemo } from "react";

type props = {
  iRefs: any;
};

export type element = {
  _id: string;
  name: string;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  __v: number;
};

export const Ingredients = (props: props) => {
  const { ref1, ref2, ref3 } = props.iRefs.refs;
  const buns = useMemo(
    () => props.iRefs.data.filter((element: element) => element.type === "bun"),
    [props.iRefs.data]
  );
  const sauces = useMemo(
    () =>
      props.iRefs.data.filter((element: element) => element.type === "sauce"),
    [props.iRefs.data]
  );
  const mains = useMemo(
    () =>
      props.iRefs.data.filter((element: element) => element.type === "main"),
    [props.iRefs.data]
  );
  return (
    <>
      <div className={css.componentsHeader}>Булки</div>
      <div ref={ref1} className={css.componentsListContainer}>
        {buns.map((element: element) => (
          <IngredientCard key={element._id} {...element} />
        ))}{" "}
      </div>
      <div ref={ref2} className={css.componentsHeader}>
        Соусы
      </div>
      <div ref={ref2} className={css.componentsListContainer}>
        {sauces.map((element: element) => (
          <IngredientCard key={element._id} {...element} />
        ))}
      </div>
      <div className={css.componentsHeader}>Начинки</div>
      <div ref={ref3} className={css.componentsListContainer}>
        {mains.map((element: element) => (
          <IngredientCard key={element._id} {...element} />
        ))}
      </div>
    </>
  );
};

export default Ingredients;
