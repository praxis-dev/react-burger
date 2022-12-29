import css from "./Popup.module.css";
import ReactDOM from "react-dom";

function Popup(props: any) {
  const { modal, toggleModal, OrderDetails } = props;
  console.log(props);
  console.log(OrderDetails);
  if (!modal) return null;
  return ReactDOM.createPortal(
    <>
      <div onClick={toggleModal} className={css.overlay}></div>
      <OrderDetails toggleModal={toggleModal} />
    </>,
    document.getElementById("portal") as Element
  );
}

export default Popup;
