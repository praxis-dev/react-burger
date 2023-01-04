import css from "./Stack.module.css";
import fixedImage from "../../images/bun-02.png";
import StackedIngredient from "../StackedIngredient/StackedIngredient";
import largeCurrencyIcon from "../../images/Subtract.svg";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import OrderDetails from "../OrderDetails/OrderDetails";
import Popup from "../Popup/Popup";

function Stack(props: any) {
  const data = Array.from(Object.values(props));
  const { modal, setModal, toggleModal, render } = OrderDetails();

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
        <StackedIngredient
          position="top"
          isLocked={true}
          name="Краторная булка N-200i (верх)"
          price={20}
          image={fixedImage}
        />

        <div className={css.stackScreen}>
          {data.map((element: any) => (
            <StackedIngredient key={element._id} {...element} />
          ))}
        </div>
        <StackedIngredient
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
        <Button
          onClick={toggleModal}
          htmlType="button"
          type="primary"
          size="medium"
        >
          Оформить заказ{" "}
        </Button>
      </div>
      <Popup
        modal={modal}
        setModal={setModal}
        toggleModal={toggleModal}
        ModalContent={OrderDetails}
        specificProps={{}}
      >
        {render}
      </Popup>
    </>
  );
}

export default Stack;
