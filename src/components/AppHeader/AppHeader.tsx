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
      <div className={css.leftcolumn}>
        <div className={css.leftblock}>
          <div className={css.header__item}>
            <BurgerIcon type="primary" />
            <p className={css.header__text}>Конструктор</p>
          </div>
          <div className={css.header__item}>
            <ListIcon type="primary" />
            <div className={css.header__text}>Лента заказов</div>
          </div>
        </div>
      </div>
      <div className={css.centercolumn}>
        <Logo />
      </div>
      <div className={css.rightcolumn}>
        <div className={css.header__item}>
          <ProfileIcon type="primary" />
          <p className={css.header__text}>Личный кабинет</p>
        </div>
      </div>
    </header>
  );
}

export default AppHeader;
