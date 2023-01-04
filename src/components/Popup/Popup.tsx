import css from "./Popup.module.css";
import ReactDOM from "react-dom";
import { useEffect } from "react";

type props = {
  modal: boolean;
  setModal: (arg: boolean) => void;
  toggleModal: () => void;
  children: React.ReactNode;
};

function Popup(props: props) {
  const { modal, setModal, toggleModal } = props;

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
      {props.children}
    </>,
    document.getElementById("portal") as Element
  );
}

export default Popup;
