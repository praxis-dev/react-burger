import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
// import { Popup } from "../Popup/Popup";
import { useState } from "react";
import css from "./IngredientCard.module.css";
import ComponentDetails from "../OrderDetails/OrderDetails";

type props = element;

type element = {
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

function IngredientCard(props: props) {
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

export default IngredientCard;
