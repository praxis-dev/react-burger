import Component from "../Component/Component";
import css from "./Ingredients.module.css";

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
  const buns = props.iRefs.data.filter(
    (element: any) => element.type === "bun"
  );
  const sauces = props.iRefs.data.filter(
    (element: element) => element.type === "sauce"
  );
  const mains = props.iRefs.data.filter(
    (element: element) => element.type === "main"
  );
  return (
    <>
      <div className={css.componentsHeader}>Булки</div>
      <div ref={ref1} className={css.componentsListContainer}>
        {buns.map((element: element) => (
          <Component key={element._id} {...element} />
        ))}{" "}
      </div>
      <div ref={ref2} className={css.componentsHeader}>
        Соусы
      </div>
      <div ref={ref2} className={css.componentsListContainer}>
        {sauces.map((element: element) => (
          <Component key={element._id} {...element} />
        ))}
      </div>
      <div className={css.componentsHeader}>Начинки</div>
      <div ref={ref3} className={css.componentsListContainer}>
        {mains.map((element: element) => (
          <Component key={element._id} {...element} />
        ))}
      </div>
    </>
  );
};

export default Ingredients;
