import css from "./Stack.module.css";
import StackedIngredient from "../StackedIngredient/StackedIngredient";
import largeCurrencyIcon from "../../images/Subtract.svg";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import Popup from "../Popup/Popup";
import { useSelector } from "react-redux";
import { ingredientsSlice } from "../../services/slice/ingredientsSlice";
import { store } from "../../services/store/Store";
import { useDrop } from "react-dnd";
import { useEffect } from "react";
import { postOrderThunk } from "../../services/thunk/postOrderThunk";
import { AnyAction } from "redux";
import { useLocation, useNavigate } from "react-router-dom";
import { getCookie } from "../../utils/cookies/getCookie";
import { v4 as uuidv4 } from "uuid";
import OrderDetails from "../OrderDetails/OrderDetails";

function Stack() {
  const modalType = useSelector((state: any) => state.ingredients.modalType);
  const data = useSelector(
    (state: any) => state.ingredients.ingredientsInStack
  );

  const modal = useSelector((state: any) => state.ingredients.modal);

  const setModal = (value: boolean) => {
    store.dispatch(ingredientsSlice.actions._MODAL(value));
  };

  const toggleModal = () => {
    setModal(!modal);
  };

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

  const navigate = useNavigate();
  const ingredientsInStack = useSelector(
    (state: any) => state.ingredients.ingredientsInStack
  );

  async function postOrder() {
    if (getCookie("accessToken")) {
      store.dispatch(postOrderThunk(data) as unknown as AnyAction);
      store.dispatch(ingredientsSlice.actions._MODAL_TYPE("order"));

      toggleModal();
    } else {
      console.log(ingredientsInStack);
      navigate("/react-burger/login");
    }
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
            key={uuidv4()}
          />
        );
      }
    });
  };

  const { pathname } = useLocation();

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
      {(pathname !== "/react-burger" || modal) && modalType === "order" && (
        <Popup>
          <OrderDetails />
        </Popup>
      )}
    </>
  );
}

export default Stack;
