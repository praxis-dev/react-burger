import {
  CurrencyIcon,
  DragIcon,
  DeleteIcon,
  LockIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import css from "./StackComponent.module.css";

const handleType = (type: any) => {
  if (type === "top") {
    return css.topBlock;
  } else if (type === "bottom") {
    return css.bottomBlock;
  } else {
    return css.middleBlock;
  }
};

const StackComponent = (props: any) => {
  const { type, isLocked, text, price, thumbnail } = props;
  return (
    <>
      <div className={css.block}>
        <div className={css.dragIcon}>
          <DragIcon type="primary" />
        </div>
        <div className={handleType(type)}>
          <div className={css.iconBlock}>
            <img src={thumbnail} alt="Иконка ингридиент" />
          </div>
          <div className={css.textBlock}>{text}</div>
          <div className={css.priceAndIcon}>
            <p className={css.price}>{price}</p>
            <CurrencyIcon type="primary" />
          </div>
          <div className={css.deleteIcon}>
            {isLocked ? (
              <LockIcon type="primary" />
            ) : (
              <DeleteIcon type="primary" />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default StackComponent;
