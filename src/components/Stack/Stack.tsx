import css from "./Stack.module.css";
import fixedElement from "../../images/bun-02.png";
import StackComponent from "../StackComponent/StackComponent";
import largeCurrencyIcon from "../../images/Subtract.svg";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import filler from "../../images/sauce-03.png";

function Stack() {
  return (
    <>
      <div className={css.stack}>
        <StackComponent
          type="top"
          isLocked={true}
          text="Краторная булка N-200i (верх)"
          price={20}
          thumbnail={fixedElement}
        />
        <div className={css.stackScreen}>
          <StackComponent
            text="Соус традиционный галактический"
            price={50}
            thumbnail={filler}
          />
          <StackComponent
            text="Соус традиционный галактический"
            price={50}
            thumbnail={filler}
          />
        </div>
        <StackComponent
          type="bottom"
          isLocked={true}
          text="Краторная булка N-200i (низ)"
          price={20}
          thumbnail={fixedElement}
        />
      </div>
      <div className={css.buttonAndTotalContainer}>
        <div className={css.totalAndIcon}>
          <p className={css.total}>7777</p>
          <img
            className={css.largeCurrencyIcon}
            src={largeCurrencyIcon}
            alt="Иконка галактической валюты крупная"
          />
        </div>
        <Button htmlType="button" type="primary" size="medium">
          {" "}
          Оформить заказ{" "}
        </Button>
      </div>
    </>
  );
}

export default Stack;
