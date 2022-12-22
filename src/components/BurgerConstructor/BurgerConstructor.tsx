import css from "./BurgerConstructor.module.css";
import Component from "../Component/Component";
import Stack from "../Stack/Stack";
import { data } from "../../utils/data";
import { useIsVisible } from "../../utils/useIsVisible";
import { useRef, useEffect } from "react";

function BurgerConstructor() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const ref1IsVisible = useIsVisible(ref1);
  const ref2IsVisible = useIsVisible(ref2);
  const ref3IsVisible = useIsVisible(ref3);

  function switcher() {
    if (ref1IsVisible) {
      console.log("ref1IsVisible is visible");
    } else if (ref2IsVisible) {
      console.log("ref2IsVisible is visible");
    } else if (ref3IsVisible) {
      console.log("ref3IsVisible is visible");
    }
  }

  useEffect(() => {
    switcher();
  });

  const renderComponents = (props: any) => {
    let buns = props.filter((element: any) => element.type === "bun");
    let sauces = props.filter((element: any) => element.type === "sauce");
    let mains = props.filter((element: any) => element.type === "main");
    return (
      <>
        <div ref={ref1} className={css.componentsHeader}>
          Булки
        </div>
        <div className={css.componentsListContainer}>
          {buns.map((element: any) => (
            <Component key={element.someUniqueIdentifier} {...element} />
          ))}{" "}
        </div>
        <div ref={ref2} className={css.componentsHeader}>
          Соусы
        </div>
        <div className={css.componentsListContainer}>
          {sauces.map((element: any) => (
            <Component key={element.someUniqueIdentifier} {...element} />
          ))}
        </div>
        <div ref={ref3} className={css.componentsHeader}>
          Начинки
        </div>
        <div className={css.componentsListContainer}>
          {mains.map((element: any) => (
            <Component key={element.someUniqueIdentifier} {...element} />
          ))}
        </div>
      </>
    );
  };

  return (
    <>
      <section className={css.section}>
        <div className={css.first}>
          {" "}
          <h1 className={css.header}>Соберите бургер</h1>
        </div>
        <div className={css.componentsAndOrder}>
          <div className={css.components}>
            <div className={css.selectorContainer}>
              <div
                className={
                  css.componentsSelector + " " + css.componentsSelectorSelected
                }
              >
                Булки
              </div>
              <div className={css.componentsSelector}>Соусы</div>
              <div className={css.componentsSelector}>Начинки</div>
            </div>
            <div className={css.componentsList}>{renderComponents(data)}</div>
          </div>
          <div className={css.order}>
            <Stack />
          </div>
        </div>
      </section>
    </>
  );
}

export default BurgerConstructor;
