import {} from "@ya.praktikum/react-developer-burger-ui-components";

import css from "./BurgerConstructor.module.css";

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
        <div className={css.componentsandorder}>
          <div className={css.components}>
            <div className={css.selectorcontainer}>
              <div className={css.componentsselector}>Булки</div>
              <div className={css.componentsselector}>Соусы</div>
              <div className={css.componentsselector}>Начинки</div>
            </div>
          </div>
          <div className={css.order}>testestes</div>
        </div>
      </div>
    </>
  );
}

export default BurgerConstructor;
