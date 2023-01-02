import css from "./Popup.module.css";
import ReactDOM from "react-dom";
import { useEffect } from "react";

function Popup(props: any) {
  const { modal, setModal, toggleModal, ModalContent, specificProps } = props;

  useEffect(() => {
    function handleEscapeKey(event: KeyboardEvent) {
      if (event.code === "Escape") {
        setModal(false);
      }
    }

    document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, [setModal]);

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
