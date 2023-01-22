import css from "./Stack.module.css";
import fixedImage from "../../images/bun-02.png";
import StackedIngredient from "../StackedIngredient/StackedIngredient";
import largeCurrencyIcon from "../../images/Subtract.svg";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import OrderDetails from "../OrderDetails/OrderDetails";
import Popup from "../Popup/Popup";
import { useContext } from "react";
import { IngredientsContext } from "../App/App";
import { useState } from "react";

import { createContext } from "react";

export const OrderDetailsContext = createContext(0);
export const OrderDetailsContextProvider = OrderDetailsContext.Provider;

function Stack() {
  const input = useContext(IngredientsContext);
  const data = Array.from(Object.values(input));
  const { modal, setModal, toggleModal, render } = OrderDetails();
  const [orderNumber, setOrderNumber] = useState(0);

  function getPrice() {
    const reducer = (accumulator: number, currentValue: number) =>
      accumulator + currentValue;
    const prices = data.map((element: any) => element.price);
    return prices.reduce(reducer, 0);
  }

  function renderTopBun(data: any) {
    const firstBunItem = data.find((item: any) => item.type === "bun");

    return firstBunItem ? (
      <StackedIngredient
        position="top"
        isLocked={true}
        name={firstBunItem.name + " (верх)"}
        price={firstBunItem.price}
        image={fixedImage}
      />
    ) : null;
  }

  function renderBottomBun(data: any) {
    const firstBunItem = data.find((item: any) => item.type === "bun");

    return firstBunItem ? (
      <StackedIngredient
        position="bottom"
        isLocked={true}
        name={firstBunItem.name + " (низ)"}
        price={firstBunItem.price}
        image={fixedImage}
      />
    ) : null;
  }

  const postOrder = () => {
    fetch("https://norma.nomoreparties.space/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ingredients: data.map((element: any) => element._id),
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then((res) => {
        setOrderNumber(res.order.number);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(`orderNumber: ${orderNumber}`);

  const wrapper = (e: any) => {
    e.preventDefault();
    postOrder();
    toggleModal();
  };

  return (
    <>
      <div className={css.stack}>
        {renderTopBun(data)}

        <div className={css.stackScreen}>
          {data.map((element: any) => (
            <StackedIngredient key={element._id} {...element} />
          ))}
        </div>
        {renderBottomBun(data)}
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
        <Button
          onClick={wrapper}
          htmlType="button"
          type="primary"
          size="medium"
        >
          Оформить заказ{" "}
        </Button>
      </div>
      <OrderDetailsContextProvider value={orderNumber}>
        <Popup modal={modal} setModal={setModal} toggleModal={toggleModal}>
          {render}
        </Popup>
      </OrderDetailsContextProvider>
    </>
  );
}

export default Stack;
