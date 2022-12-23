import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import css from "./Component.module.css";

import { element } from "../Ingredients/Ingredients";

type props = element;

function Component(props: props) {
  const {
    _id,
    name,
    type,
    proteins,
    fat,
    carbohydrates,
    calories,
    price,
    image,
    image_mobile,
    image_large,
    __v,
  } = props;

  return (
    <>
      <div className={css.component}>
        <div className={css.portionsCounter}>2</div>
        <img
          alt="Иконка компонента"
          src={image}
          className={css.componentImage}
        ></img>
        <div className={css.priceAndIcon}>
          {" "}
          <div className={css.componentPrice}>{price}</div>
          <CurrencyIcon type="primary" />
        </div>
        <p className={css.componentName}>{name}</p>
      </div>
    </>
  );
}

export default Component;
