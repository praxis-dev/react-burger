import css from "./BurgerConstructor.module.css";
import Stack from "../Stack/Stack";
import { useIsVisible } from "../../utils/useIsVisible";
import { useRef } from "react";
import { Ingredients } from "../Ingredients/Ingredients";

type data = {};

function BurgerConstructor(data: data) {
  const refs = {
    ref1: useRef<null | HTMLDivElement>(null),
    ref2: useRef<null | HTMLDivElement>(null),
    ref3: useRef<null | HTMLDivElement>(null),
  };

  const ref1IsVisible = useIsVisible(refs.ref1);
  const ref2IsVisible = useIsVisible(refs.ref2);
  const ref3IsVisible = useIsVisible(refs.ref3);

  const handleRef1Click = () => {
    refs.ref1.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleRef2Click = () => {
    refs.ref2.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleRef3Click = () => {
    refs.ref3.current?.scrollIntoView({ behavior: "smooth" });
  };

  const iRefs = { data: data, refs: refs };

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
            <div className={css.componentsList}>
              <Ingredients iRefs={iRefs} />
            </div>
          </div>
          <div className={css.order}>
            <Stack {...data} />
          </div>
        </div>
      </section>
    </>
  );
}

export default BurgerConstructor;
