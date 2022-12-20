import {} from "@ya.praktikum/react-developer-burger-ui-components";

import css from "./Stack.module.css";

import StackComponent from "../StackComponent/StackComponent";

function Stack() {
  return (
    <>
      {" "}
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <StackComponent
          text="Краторная булка N-200i (верх)"
          price={50}
          //   thumbnail={}
        />
      </div>
    </>
  );
}

export default Stack;
