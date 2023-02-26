import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import css from "./AppHeader.module.css";
import { useNavigate } from "react-router-dom";

function AppHeader() {
  const navigate = useNavigate();

  const onProfileClick = () => {
    navigate("/react-burger/profile");
  };

  return (
    <header className={css.header}>
      <div className={css.leftColumn}>
        <div className={css.leftBlock}>
          <div className={css.headerItem}>
            <BurgerIcon type="primary" />
            <a href="/" className={css.headerText}>
              Конструктор
            </a>
          </div>
          <div className={css.headerItem}>
            <ListIcon type="primary" />
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
          <ProfileIcon type="primary" />
          <div onClick={onProfileClick} className={css.headerText}>
            Личный кабинет
          </div>
        </div>
      </div>
    </header>
  );
}

export default AppHeader;
