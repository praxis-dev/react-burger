import css from "./Stack.module.css";
import fixedImage from "../../images/bun-02.png";
import StackedIngredient from "../StackedIngredient/StackedIngredient";
import largeCurrencyIcon from "../../images/Subtract.svg";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import OrderDetails from "../OrderDetails/OrderDetails";
import Popup from "../Popup/Popup";
import { useContext } from "react";
import { IngredientsContext } from "../../services/context";

function Stack() {
  const input = useContext(IngredientsContext);
  const data = Array.from(Object.values(input));
  const { modal, setModal, toggleModal, setOrderNumber, render } =
    OrderDetails();
  // const [orderNumber, setOrderNumber] = useState(0);

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

  async function postOrder() {
    const result = await fetch("https://norma.nomoreparties.space/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ingredients: data.map((element: any) => element._id),
      }),
    });

    const res = await result.json();

    setOrderNumber(res.order.number);

    toggleModal();
  }

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
          onClick={postOrder}
          htmlType="button"
          type="primary"
          size="medium"
        >
          Оформить заказ{" "}
        </Button>
      </div>
      <Popup modal={modal} setModal={setModal} toggleModal={toggleModal}>
        {render}
      </Popup>
    </>
  );
}

export default Stack;
