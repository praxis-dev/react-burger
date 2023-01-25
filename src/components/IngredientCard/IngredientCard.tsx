import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import Popup from "../Popup/Popup";
import { useState } from "react";
import css from "./IngredientCard.module.css";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import { ingredientsSlice } from "../App/ingredientsSlice";
import { store } from "../App/Store";
import { useDrag } from "react-dnd";

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
  const [{ isDragging }, dragRef] = useDrag({
    type: "ingredient",
    item: props,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

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

  const { modal, setModal, toggleModal, render } = IngredientDetails();

  const onClick = () => {
    store.dispatch(ingredientsSlice.actions.ingredientDataForPopup(props));
    toggleModal();
  };

  return (
    <>
      <div
        onClick={onClick}
        className={css.component}
        ref={dragRef}
        style={{ border: isDragging ? "2px solid red" : "2px solid green" }}
      >
        <div className={css.portionsCounter}>2</div>
        <img
          alt="Иконка компонента"
          src={image}
          className={css.componentImage}
        />
        <div className={css.priceAndIcon}>
          {" "}
          <div className={css.componentPrice}>{price}</div>
          <CurrencyIcon type="primary" />
        </div>
        <p className={css.componentName}>{name}</p>
      </div>
      <Popup modal={modal} setModal={setModal} toggleModal={toggleModal}>
        {render}
      </Popup>
    </>
  );
}

export default IngredientCard;
