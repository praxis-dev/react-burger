import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import css from "./StackComponent.module.css";

const StackComponent = (props: any) => {
  const { name, price, thumbnail } = props;
  return (
    <>
      <div className={css.middleBlock}>
        <div className={css.dragIcon}></div>
        <div className={css.blockContent}>
          <div className={css.iconBlock}>
            <img src={thumbnail} alt="Иконка ингридиент" />
          </div>
          <div className={css.textBlock}>{name}</div>
          <div className={css.priceAndIcon}>
            <p className={css.price}>{price}</p>
            <CurrencyIcon type="primary" />
          </div>
        </div>
      </div>
    </>
  );
};

export default StackComponent;
