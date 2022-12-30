import css from "./Popup.module.css";
import ReactDOM from "react-dom";

function Popup(props: any) {
  const { modal, toggleModal, ModalContent, specificProps } = props;
  if (!modal) return null;
  return ReactDOM.createPortal(
    <>
      <div onClick={toggleModal} className={css.overlay}></div>
      {<ModalContent toggleModal={toggleModal} specificProps={specificProps} />}
    </>,
    document.getElementById("portal") as Element
  );
}

export default Popup;
