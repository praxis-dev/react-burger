import css from "./Stack.module.css";
import fixedImage from "../../images/bun-02.png";
import StackComponent from "../StackComponent/StackComponent";
import largeCurrencyIcon from "../../images/Subtract.svg";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { data } from "../../utils/data";

function Stack() {
  function getPrice() {
    let totalPrice = 0;
    data.forEach((element: any) => {
      totalPrice += element.price;
    });
    return totalPrice + 40;
  }

  return (
    <>
      <div className={css.stack}>
        <StackComponent
          position="top"
          isLocked={true}
          name="Краторная булка N-200i (верх)"
          price={20}
          image={fixedImage}
        />

        <div className={css.stackScreen}>
          {data.map((element: any) => (
            <StackComponent {...element} />
          ))}
        </div>
        <StackComponent
          position="bottom"
          isLocked={true}
          name="Краторная булка N-200i (низ)"
          price={20}
          image={fixedImage}
        />
      </div>
      <div className={css.buttonAndTotalContainer}>
        <div className={css.totalAndIcon}>
          <p className={css.total}>{getPrice()}</p>
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
