import Component from "../Component/Component";
import css from "./Ingredients.module.css";

export const Ingredients = (props: any) => {
  const { ref1, ref2, ref3 } = props.iRefs.refs;
  let buns = props.iRefs.data.filter((element: any) => element.type === "bun");
  let sauces = props.iRefs.data.filter(
    (element: any) => element.type === "sauce"
  );
  let mains = props.iRefs.data.filter(
    (element: any) => element.type === "main"
  );
  return (
    <>
      <div className={css.componentsHeader}>Булки</div>
      <div ref={ref1} className={css.componentsListContainer}>
        {buns.map((element: any) => (
          <Component key={element._id} {...element} />
        ))}{" "}
      </div>
      <div ref={ref2} className={css.componentsHeader}>
        Соусы
      </div>
      <div ref={ref2} className={css.componentsListContainer}>
        {sauces.map((element: any) => (
          <Component key={element._id} {...element} />
        ))}
      </div>
      <div className={css.componentsHeader}>Начинки</div>
      <div ref={ref3} className={css.componentsListContainer}>
        {mains.map((element: any) => (
          <Component key={element._id} {...element} />
        ))}
      </div>
    </>
  );
};

export default Ingredients;
