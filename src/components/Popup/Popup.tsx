import css from "./OrderDetails.module.css";
import ReactDOM from "react-dom";

function Popup(props: any) {
  const { modal, toggleModal } = props;

  if (!modal) return null;
  return ReactDOM.createPortal(
    <>
      <div onClick={toggleModal} className={css.overlay}></div>
    </>,
    document.getElementById("portal") as Element
  );
}

export default Popup;
