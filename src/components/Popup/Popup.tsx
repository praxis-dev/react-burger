import css from "./Popup.module.css";
import ReactDOM from "react-dom";
import { useEffect } from "react";

type props = {
  modal: boolean;
  setModal: (arg: boolean) => void;
  toggleModal: () => void;
  ModalContent: any;
  specificProps: { [key: string]: any };
  children: any;
};

function Popup(props: props) {
  const { modal, setModal, toggleModal, ModalContent, specificProps } = props;

  console.log(props.children);

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
      {/* {<ModalContent toggleModal={toggleModal} specificProps={specificProps} />} */}
    </>,
    document.getElementById("portal") as Element
  );
}

export default Popup;
