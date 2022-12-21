import css from "./Stack.module.css";
import imageThumbnail from "../../images/sauce-03.png";
import StackComponent from "../StackComponent/StackComponent";
import largeCurrencyIcon from "../../images/Subtract.svg";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";

function Stack() {
  return (
    <>
      {" "}
      <div
        className={css.stack}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <StackComponent
          type="top"
          isLocked={true}
          text="Соус традиционный галактический"
          price={50}
          thumbnail={imageThumbnail}
        />
        <div className={css.stackScreen}>
          <StackComponent
            text="Соус традиционный галактический"
            price={50}
            thumbnail={imageThumbnail}
          />
          <StackComponent
            text="Соус традиционный галактический"
            price={50}
            thumbnail={imageThumbnail}
          />
          <StackComponent
            text="Соус традиционный галактический"
            price={50}
            thumbnail={imageThumbnail}
          />
          <StackComponent
            text="Соус традиционный галактический"
            price={50}
            thumbnail={imageThumbnail}
          />
          <StackComponent
            text="Соус традиционный галактический"
            price={50}
            thumbnail={imageThumbnail}
          />
          <StackComponent
            text="Соус традиционный галактический"
            price={50}
            thumbnail={imageThumbnail}
          />
        </div>
        <StackComponent
          type="bottom"
          isLocked={true}
          text="Соус традиционный галактический"
          price={50}
          thumbnail={imageThumbnail}
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
