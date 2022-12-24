import {
  CurrencyIcon,
  DragIcon,
  DeleteIcon,
  LockIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import css from "./StackComponent.module.css";

const handlePosition = (type: any) => {
  if (type === "top") {
    return css.topBlock;
  } else if (type === "bottom") {
    return css.bottomBlock;
  } else {
    return css.middleBlock;
  }
};

const StackComponent = (props: any) => {
  const { position, isLocked, name, price, image } = props;
  return (
    <>
      <div className={css.block}>
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
            <div className={css.deleteIcon}>
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

export default StackComponent;
