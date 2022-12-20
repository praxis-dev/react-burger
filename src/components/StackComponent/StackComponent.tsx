import {
  CurrencyIcon,
  DragIcon,
  DeleteIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import css from "./StackComponent.module.css";

const StackComponent = (props: any) => {
  const { text, price, thumbnail } = props;
  return (
    <>
      <div className={css.middleBlock}>
        <div className={css.dragIcon}>
          <DragIcon type="primary" />
        </div>
        <div className={css.blockContent}>
          <div className={css.iconBlock}>
            <img src={thumbnail} alt="Иконка ингридиент" />
          </div>
          <div className={css.textBlock}>{text}</div>
          <div className={css.priceAndIcon}>
            <p className={css.price}>{price}</p>
            <CurrencyIcon type="primary" />
          </div>
          <div className={css.deleteIcon}>
            <DeleteIcon type="primary" />
          </div>
        </div>
      </div>
    </>
  );
};

export default StackComponent;
