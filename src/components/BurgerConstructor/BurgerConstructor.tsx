import css from "./BurgerConstructor.module.css";

import Component from "../Component/Component";

function BurgerConstructor() {
  const apiGet = () => {
    fetch("https://norma.nomoreparties.space/api/ingredients").then(
      (response) => response.json().then((json) => console.log(json))
    );
  };

  const clickHandler = () => {
    return (event: React.MouseEvent) => {
      event.preventDefault();
      console.log("click");
      apiGet();
    };
  };

  return (
    <>
      <div className={css.section}>
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
            <div className={css.componentsList}>
              <div className={css.componentsHeader}>Булки</div>
              <div className={css.componentsListContainer}>
                <Component />
                <Component />
                <Component />
                <Component />
              </div>
            </div>
          </div>
          <div className={css.order}>testestes</div>
        </div>
      </div>
    </>
  );
}

export default BurgerConstructor;
