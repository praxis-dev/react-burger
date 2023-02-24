import css from "./Profile.module.css";
import {
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { logoutUserMiddleware } from "../../services/middleware/logoutUserMiddleware";
import { store } from "../../services/store/Store";
import { AnyAction } from "redux";
import { getUserDataMiddleware } from "../../services/middleware/getUserDataMiddleware";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export const Profile = () => {
  const onExitClick = () => {
    store.dispatch(logoutUserMiddleware() as unknown as AnyAction);
  };

  useEffect(() => {
    store.dispatch(getUserDataMiddleware() as unknown as AnyAction);
  }, []);

  const userData = useSelector((state: any) => state.ingredients.userData);

  console.log(userData.name, userData.email);

  console.log("userData: " + JSON.stringify(userData));

  return (
    <div className={css.section}>
      <div className={css.profileMenuContainer}>
        <div className={css.profileMenu}>
          <div className={css.profileMenuItem}>
            <p className={css.profileMenuItemText}>Профиль</p>
          </div>
          <div className={css.profileMenuItem}>
            <p className={css.profileMenuItemText}>История</p>
          </div>
          <div className={css.profileMenuItem}>
            <p onClick={onExitClick} className={css.profileMenuItemText}>
              Выход
            </p>
          </div>
        </div>
        <div className={css.description}>
          <p className={css.descriptionText}>
            В этом разделе вы можете изменить свои персональные данные
          </p>
        </div>
      </div>
      <div className={css.fieldsContainer}>
        <form className={css.form}>
          <Input
            type={"text"}
            placeholder={"Имя"}
            onChange={(e) => console.log(e.target.value)}
            name={"name"}
            value={""}
            error={false}
            errorText={"Ошибка"}
            size={"default"}
            extraClass={css.spacer}
          />
          <Input
            type={"text"}
            placeholder={"Логин"}
            onChange={(e) => console.log(e.target.value)}
            name={"Login"}
            value={""}
            error={false}
            errorText={"Ошибка"}
            size={"default"}
            extraClass={css.spacer}
          />
          <PasswordInput
            onChange={(e) => console.log(e.target.value)}
            placeholder={"Пароль"}
            value={""}
            extraClass={css.spacer}
          />
        </form>
      </div>
      <div> </div>
    </div>
  );
};
