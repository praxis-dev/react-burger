import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import css from "./Component.module.css";

import imageComponent from "../../images/bun-02.png";

function Component() {
  return (
    <>
      <div className={css.component}>
        <div className={css.portionsCounter}>2</div>
        <img
          alt="Иконка компонента"
          src={imageComponent}
          className={css.componentImage}
        ></img>
        <div className={css.priceAndIcon}>
          {" "}
          <div className={css.componentPrice}>100</div>
          <CurrencyIcon type="primary" />
        </div>
        <p className={css.componentName}>Краторная булка N-200i</p>
      </div>
    </>
  );
}

export default Component;
