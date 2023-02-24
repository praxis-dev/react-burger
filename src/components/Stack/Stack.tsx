import css from "./Stack.module.css";
import StackedIngredient from "../StackedIngredient/StackedIngredient";
import largeCurrencyIcon from "../../images/Subtract.svg";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import OrderDetails from "../OrderDetails/OrderDetails";
import Popup from "../Popup/Popup";
import { useSelector } from "react-redux";
import { ingredientsSlice } from "../../services/slice/ingredientsSlice";
import { store } from "../../services/store/Store";
import { useDrop } from "react-dnd";
import { useEffect } from "react";
import { postOrderMiddleware } from "../../services/middleware/postOrderMiddlware";
import { AnyAction } from "redux";

function Stack() {
  const data = useSelector(
    (state: any) => state.ingredients.ingredientsInStack
  );

  const { modal, setModal, toggleModal, render } = OrderDetails();

  const [{ isOver }, dropRef] = useDrop({
    accept: "ingredient",
    drop(item: any) {
      if (!item.isStacked) {
        addIngredientToStack(item);
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  const addIngredientToStack = (item: any) => {
    const deployedItem = { ...item, isStacked: true };
    store.dispatch(ingredientsSlice.actions.addIngredientToStack(deployedItem));
  };

  function getPrice() {
    const reducer = (accumulator: number, currentValue: number) =>
      accumulator + currentValue;
    const prices = data.map((element: any) => element.price);
    return prices.reduce(reducer, 0);
  }

  useEffect(() => {
    const bunCounter = data.filter((item: any) => item.type === "bun").length;

    if (bunCounter > 1) {
      const firstBunItem = data.find((item: any) => item.type === "bun");

      store.dispatch(
        ingredientsSlice.actions.removeIngredientFromStack(firstBunItem.name)
      );
    }
  }, [data]);

  function renderTopBun(data: any) {
    //find out how many buns are in the stack

    const firstBunItem = data.find((item: any) => item.type === "bun");

    return firstBunItem ? (
      <StackedIngredient
        position="top"
        isLocked={true}
        name={firstBunItem.name + " (верх)"}
        price={firstBunItem.price}
        image={firstBunItem.image}
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
        image={firstBunItem.image}
      />
    ) : null;
  }

  async function postOrder() {
    store.dispatch(postOrderMiddleware(data) as unknown as AnyAction);

    toggleModal();
  }

  const renderElement = (data: any) => {
    return data.map((element: any, index: number) => {
      if (element.type === "bun") {
        return null;
      } else {
        return (
          <StackedIngredient
            position="middle"
            isLocked={false}
            name={element.name}
            price={element.price}
            image={element.image}
            key={index}
          />
        );
      }
    });
  };

  return (
    <>
      <div className={css.stack} ref={dropRef}>
        {renderTopBun(data)}

        <div className={css.stackScreen}>{renderElement(data)}</div>
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
          disabled={data.length === 0}
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
