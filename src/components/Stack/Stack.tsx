import css from "./Stack.module.css";

import imageThumbnail from "../../images/sauce-03.png";

import StackComponent from "../StackComponent/StackComponent";

function Stack() {
  return (
    <>
      {" "}
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <StackComponent
          type="top"
          isLocked={true}
          text="Соус традиционный галактический"
          price={50}
          thumbnail={imageThumbnail}
        />
        <StackComponent
          text="Соус традиционный галактический"
          price={50}
          thumbnail={imageThumbnail}
        />
        <StackComponent
          type="bottom"
          isLocked={true}
          text="Соус традиционный галактический"
          price={50}
          thumbnail={imageThumbnail}
        />
      </div>
    </>
  );
}

export default Stack;
