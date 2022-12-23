import css from "./BurgerConstructor.module.css";
import Component from "../Component/Component";
import Stack from "../Stack/Stack";
import { data } from "../../utils/data";
import { useIsVisible } from "../../utils/useIsVisible";
import { useRef } from "react";

function BurgerConstructor() {
  const ref1 = useRef<null | HTMLDivElement>(null);
  const ref2 = useRef<null | HTMLDivElement>(null);
  const ref3 = useRef<null | HTMLDivElement>(null);

  const ref1IsVisible = useIsVisible(ref1);
  const ref2IsVisible = useIsVisible(ref2);
  const ref3IsVisible = useIsVisible(ref3);

  const handleRef1Click = () => {
    ref1.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleRef2Click = () => {
    ref2.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleRef3Click = () => {
    ref3.current?.scrollIntoView({ behavior: "smooth" });
  };

  const renderComponents = (props: any) => {
    let buns = props.filter((element: any) => element.type === "bun");
    let sauces = props.filter((element: any) => element.type === "sauce");
    let mains = props.filter((element: any) => element.type === "main");
    return (
      <>
        <div className={css.componentsHeader}>Булки</div>
        <div ref={ref1} className={css.componentsListContainer}>
          {buns.map((element: any) => (
            <Component key={element.someUniqueIdentifier} {...element} />
          ))}{" "}
        </div>
        <div ref={ref2} className={css.componentsHeader}>
          Соусы
        </div>
        <div ref={ref2} className={css.componentsListContainer}>
          {sauces.map((element: any) => (
            <Component key={element.someUniqueIdentifier} {...element} />
          ))}
        </div>
        <div className={css.componentsHeader}>Начинки</div>
        <div ref={ref3} className={css.componentsListContainer}>
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
                onClick={handleRef1Click}
                className={
                  ref1IsVisible
                    ? css.componentsSelector +
                      " " +
                      css.componentsSelectorSelected
                    : css.componentsSelector
                }
              >
                Булки
              </div>
              <div
                onClick={handleRef2Click}
                className={
                  ref2IsVisible
                    ? css.componentsSelector +
                      " " +
                      css.componentsSelectorSelected
                    : css.componentsSelector
                }
              >
                Соусы
              </div>
              <div
                onClick={handleRef3Click}
                className={
                  ref3IsVisible
                    ? css.componentsSelector +
                      " " +
                      css.componentsSelectorSelected
                    : css.componentsSelector
                }
              >
                Начинки
              </div>
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
