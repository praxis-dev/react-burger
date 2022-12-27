import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
// import { Popup } from "../Popup/Popup";
import { useState } from "react";

import css from "./IngredientCard.module.css";

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

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <div onClick={toggleModal} className={css.component}>
        <div className={css.portionsCounter}>2</div>
        <img
          alt="Иконка компонента"
          src={image}
          className={css.componentImage}
        ></img>
        <div className={css.priceAndIcon}>
          {" "}
          <div className={css.componentPrice}>{price}</div>
          <CurrencyIcon type="primary" />
        </div>
        <p className={css.componentName}>{name}</p>
      </div>
      {modal && (
        <div className={css.modal}>
          <div onClick={toggleModal} className={css.overlay}></div>
          <div className={css.modalContent}>
            <h2 className={css.orderIdentifier}>7777</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              perferendis suscipit officia recusandae, eveniet quaerat assumenda
              id fugit, dignissimos maxime non natus placeat illo iusto!
              Sapiente dolorum id maiores dolores? Illum pariatur possimus
              quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt
              placeat tempora vitae enim incidunt porro fuga ea.
            </p>
            <button className={css.closeModal} onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default IngredientCard;
