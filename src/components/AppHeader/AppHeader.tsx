import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import css from "./AppHeader.module.css";

function AppHeader() {
  return (
    <header className={css.header}>
      <div className={css.leftColumn}>
        <div className={css.leftBlock}>
          <div className={css.headerItem}>
            <BurgerIcon type="primary" />
            <p className={css.headerText}>Конструктор</p>
          </div>
          <div className={css.headerItem}>
            <ListIcon type="primary" />
            <div className={css.headerText}>Лента заказов</div>
          </div>
        </div>
      </div>
      <div className={css.centerColumn}>
        <Logo />
      </div>
      <div className={css.rightColumn}>
        <div className={css.headerItem}>
          <ProfileIcon type="primary" />
          <p className={css.headerText}>Личный кабинет</p>
        </div>
      </div>
    </header>
  );
}

export default AppHeader;
