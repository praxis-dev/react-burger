import {
  CurrencyIcon,
  DragIcon,
  DeleteIcon,
  LockIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import { store } from "../App/Store";

import { ingredientsSlice } from "../App/ingredientsSlice";

import css from "./StackedIngredient.module.css";

import { useDrag } from "react-dnd";

const handlePosition = (type: string) => {
  if (type === "top") {
    return css.topBlock;
  } else if (type === "bottom") {
    return css.bottomBlock;
  } else {
    return css.middleBlock;
  }
};

type StackedIngredientProps = {
  position: string;
  isLocked: boolean;
  name: string;
  price: number;
  image: string;
};

const StackedIngredient = (props: StackedIngredientProps) => {
  const { position, isLocked, name, price, image } = props;

  const deleteIngredient = () => {
    store.dispatch(ingredientsSlice.actions.removeIngredientFromStack(name));
  };

  const [{ isDragging }, dragRef] = useDrag({
    type: "ingredient",
    item: { name, image, price, isStacked: true },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <>
      <div className={css.block} ref={dragRef}>
        <div className={css.dragIcon}>
          <DragIcon type="primary" />
        </div>
        <div className={handlePosition(position)}>
          <div className={css.iconBlock}>
            <img className={css.image} src={image} alt="Иконка ингридиент" />
            <div className={css.textBlock}>{name}</div>
          </div>
          <div className={css.priceAndIcon}>
            <p className={css.price}>{price}</p>
            <CurrencyIcon type="primary" />
            <div className={css.deleteIcon} onClick={deleteIngredient}>
              {isLocked ? (
                <LockIcon type="primary" />
              ) : (
                <DeleteIcon type="primary" />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StackedIngredient;
