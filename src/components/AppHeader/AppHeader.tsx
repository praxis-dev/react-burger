import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import css from "./AppHeader.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

type TIconTypes = "secondary" | "primary" | "error" | "success";

function AppHeader() {
  const [BurgerIconType, setBurgerIconType] = useState<TIconTypes>("secondary");
  const [ListIconType, setListIconType] = useState<TIconTypes>("secondary");
  const [ProfileIconType, setProfileIconType] =
    useState<TIconTypes>("secondary");
  const [ConstructorActive, setConstructorActive] = useState("");
  const [ProfileActive, setProfileActive] = useState("");

  const navigate = useNavigate();

  const onProfileClick = () => {
    setProfileIconType("primary");
    setBurgerIconType("secondary");
    setConstructorActive("");
    setProfileActive("css.headerTextActive");

    navigate("/react-burger/profile");
  };

  const onConstructorClick = () => {
    setBurgerIconType("primary");
    setProfileIconType("secondary");

    setConstructorActive("css.headerTextActive");
    console.log("ConstructorActive", ConstructorActive);
    setProfileActive("");
    navigate("/react-burger/");
  };

  return (
    <header className={css.header}>
      <div className={css.leftColumn}>
        <div className={css.leftBlock}>
          <div className={css.headerItem}>
            <BurgerIcon type={BurgerIconType} />
            <div
              onClick={onConstructorClick}
              className={[css.headerText, ConstructorActive].join(" ")}
            >
              Конструктор
            </div>
          </div>
          <div className={css.headerItem}>
            <ListIcon type={ListIconType} />
            <a href="#" className={css.headerText}>
              Лента заказов
            </a>
          </div>
        </div>
      </div>
      <div className={css.centerColumn}>
        <Logo />
      </div>
      <div className={css.rightColumn}>
        <div className={css.headerItem}>
          <ProfileIcon type={ProfileIconType} />
          <div
            onClick={onProfileClick}
            className={[css.headerText, ProfileActive].join(" ")}
          >
            Личный кабинет
          </div>
        </div>
      </div>
    </header>
  );
}

export default AppHeader;
