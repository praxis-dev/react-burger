import IngredientCard from "../IngredientCard/IngredientCard";
import css from "./Ingredients.module.css";
import { useMemo } from "react";
import { IngredientsContext } from "../App/App";
import { useContext } from "react";

type props = {
  iRefs: {
    data: {};
    refs: {
      ref1: { current: null | HTMLDivElement };
      ref2: { current: null | HTMLDivElement };
      ref3: { current: null | HTMLDivElement };
    };
  };
};

type element = {
  calories: number;
  carbohydrates: number;
  fat: number;
  image: string;
  image_large: string;
  image_mobile: string;
  name: string;
  price: number;
  proteins: number;
  type: string;
  __v: number;
  _id: string;
};

export const Ingredients = (props: props) => {
  const input = useContext(IngredientsContext);
  console.log(input);
  const data: element[] = Array.from(Object.values(input));

  const { ref1, ref2, ref3 } = props.iRefs.refs;
  const buns = useMemo(
    () => data.filter((element: element) => element.type === "bun"),
    [data]
  );
  const sauces = useMemo(
    () => data.filter((element: element) => element.type === "sauce"),
    [data]
  );
  const mains = useMemo(
    () => data.filter((element: element) => element.type === "main"),
    [data]
  );

  return (
    <>
      <div className={css.componentsHeader}>Булки</div>
      <div ref={ref1} className={css.componentsListContainer}>
        {buns.map((element: any) => (
          <IngredientCard key={element._id} {...element} />
        ))}{" "}
      </div>
      <div ref={ref2} className={css.componentsHeader}>
        Соусы
      </div>
      <div ref={ref2} className={css.componentsListContainer}>
        {sauces.map((element: any) => (
          <IngredientCard key={element._id} {...element} />
        ))}
      </div>
      <div className={css.componentsHeader}>Начинки</div>
      <div ref={ref3} className={css.componentsListContainer}>
        {mains.map((element: any) => (
          <IngredientCard key={element._id} {...element} />
        ))}
      </div>
    </>
  );
};

export default Ingredients;
