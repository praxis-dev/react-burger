import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import Popup from "../Popup/Popup";
import { useEffect, useState } from "react";
import css from "./IngredientCard.module.css";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import { ingredientsSlice } from "../../services/slice/ingredientsSlice";
import { store } from "../../services/store/Store";
import { useDrag } from "react-dnd";
import { useSelector } from "react-redux";
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

  const { render } = IngredientDetails();

  const modal = useSelector((state: any) => state.ingredients.modal);

  const setModal = (value: boolean) => {
    store.dispatch(ingredientsSlice.actions._MODAL(value));
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  const onClick = () => {
    store.dispatch(ingredientsSlice.actions.ingredientDataForPopup(props));
    store.dispatch(ingredientsSlice.actions._MODAL_TYPE("ingredient"));
    toggleModal();
  };

  const ingredientsInStack = useSelector(
    (state: any) => state.ingredients.ingredientsInStack
  );

  const countPortionsInStack = () => {
    let count = 0;

    ingredientsInStack.forEach((item: any) => {
      if (item.name === name) {
        count++;
      }
    });

    return returnCounterDiv(count);
  };

  const returnCounterDiv = (count: any) => {
    if (count > 0) {
      return <div className={css.portionsCounter}>{count}</div>;
    } else if (count === 0) {
      return <></>;
    }
  };

  return (
    <>
      <div onClick={onClick} className={css.component} ref={dragRef}>
        <>
          {countPortionsInStack()}
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
        </>
      </div>
      <Popup>{render}</Popup>
    </>
  );
}

export default IngredientCard;
