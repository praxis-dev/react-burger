import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../Modal/Modal";
import css from "./IngredientCard.module.css";
import { ingredientsSlice } from "../../services/slice/ingredientsSlice";
import { useDrag } from "react-dnd";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { Element } from "../../interfaces";

type props = Element;

function IngredientCard(props: props) {
  const dispatch = useDispatch();

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

  const setModal = (value: boolean) => {
    dispatch(ingredientsSlice.actions._MODAL(value));
  };

  const navigate = useNavigate();
  const dynamicURL = `/react-burger/ingredients/${_id}`;

  const onClick = () => {
    dispatch(ingredientsSlice.actions.ingredientDataForModal(props));
    dispatch(ingredientsSlice.actions._MODAL_TYPE("ingredient"));

    setModal(true);
    navigate(dynamicURL);
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
    </>
  );
}

export default IngredientCard;