import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import Popup from "../Popup/Popup";
import { useState } from "react";
import css from "./IngredientCard.module.css";
import IngredientDetails from "../IngredientDetails/IngredientDetails";

type props = element;

type element = {
  _id: string;
  name: string;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  __v: number;
};

function IngredientCard(props: props) {
  const {
    _id,
    name,
    type,
    proteins,
    fat,
    carbohydrates,
    calories,
    price,
    image,
    image_mobile,
    image_large,
    __v,
  } = props;

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const specificProps = {
    image_large,
    name,
    calories,
    proteins,
    fat,
    carbohydrates,
  };

  return (
    <>
      <div onClick={toggleModal} className={css.component}>
        <div className={css.portionsCounter}>2</div>
        <img
          alt="Иконка компонента"
          src={image}
          className={css.componentImage}
        />
        <div className={css.priceAndIcon}>
          {" "}
          <div className={css.componentPrice}>{price}</div>
          <CurrencyIcon type="primary" />
        </div>
        <p className={css.componentName}>{name}</p>
      </div>
      <Popup
        modal={modal}
        toggleModal={toggleModal}
        ModalContent={IngredientDetails}
        specificProps={specificProps}
      />
    </>
  );
}

export default IngredientCard;
