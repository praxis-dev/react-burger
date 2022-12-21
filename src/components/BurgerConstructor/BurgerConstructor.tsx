import css from "./BurgerConstructor.module.css";
import Component from "../Component/Component";
import Stack from "../Stack/Stack";
import { data } from "../../utils/data";

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

  const renderComponents = (props: any) => {
    let buns = props.filter((element: any) => element.type === "bun");
    let sauces = props.filter((element: any) => element.type === "sauce");
    let mains = props.filter((element: any) => element.type === "main");
    return (
      <>
        <div className={css.componentsHeader}>Булки</div>
        <div className={css.componentsListContainer}>
          {buns.map((element: any) => (
            <Component key={element.someUniqueIdentifier} {...element} />
          ))}{" "}
        </div>
        <div className={css.componentsHeader}>Соусы</div>
        <div className={css.componentsListContainer}>
          {sauces.map((element: any) => (
            <Component key={element.someUniqueIdentifier} {...element} />
          ))}
        </div>
        <div className={css.componentsHeader}>Начинки</div>
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
            <div className={css.componentsList}>{renderComponents(data)}</div>
          </div>
          <div className={css.order}>
            <Stack />
          </div>
        </div>
      </div>
    </>
  );
}

export default BurgerConstructor;
