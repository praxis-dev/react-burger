import css from "./Profile.module.css";
import {
  Input,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { logoutUserMiddleware } from "../../services/middleware/logoutUserMiddleware";
import { getUserDataMiddleware } from "../../services/middleware/getUserDataMiddleware";
import { updateUserMiddleware } from "../../services/middleware/updateUserMiddleware";

import { store } from "../../services/store/Store";
import { AnyAction } from "redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { emailValidator } from "../../utils/emailValidator";
import { useNavigate } from "react-router-dom";

import { useLocation } from "react-router-dom";

export const Profile = () => {
  const userData = useSelector((state: any) => state.ingredients.userData);

  useEffect(() => {
    if (userData) {
      setName(userData.name || "");
      setEmail(userData.email || "");
    }
  }, [userData]);

  console.log(useLocation().pathname);

  const [name, setName] = useState(userData.name || "");
  const [email, setEmail] = useState(userData.email || "");
  const [password, setPassword] = useState("");

  const onPasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const onNameChange = (e: any) => {
    setName(e.target.value);
  };

  const onEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const isNotEmptyString = (str: string) => {
    return str.length > 0;
  };

  const allFieldsValid =
    isNotEmptyString(name) &&
    emailValidator(email) &&
    isNotEmptyString(password);

  const navigate = useNavigate();
  const onExitClick = () => {
    store.dispatch(logoutUserMiddleware() as unknown as AnyAction);
    navigate("/react-burger/login");
  };

  useEffect(() => {
    store.dispatch(getUserDataMiddleware() as unknown as AnyAction);
  }, []);

  const onButtonClick = () => {
    if (allFieldsValid) {
      store.dispatch(
        updateUserMiddleware({
          name,
          email,
          password,
        }) as unknown as AnyAction
      );
    }
  };

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
            onChange={(e) => onNameChange(e)}
            name={"name"}
            value={name}
            error={false}
            errorText={"Ошибка"}
            size={"default"}
            extraClass={css.spacer}
          />
          <Input
            type={"text"}
            placeholder={"Логин"}
            onChange={(e) => onEmailChange(e)}
            name={"Login"}
            value={email}
            error={false}
            errorText={"Ошибка"}
            size={"default"}
            extraClass={css.spacer}
          />
          <PasswordInput
            onChange={(e) => onPasswordChange(e)}
            placeholder={"Пароль"}
            value={password}
            extraClass={css.spacer}
          />
          <div className={css.button}>
            {" "}
            <Button
              disabled={!allFieldsValid}
              htmlType="button"
              type="primary"
              size="large"
              onClick={onButtonClick}
            >
              Сохранить
            </Button>
          </div>
        </form>
      </div>
      <div> </div>
    </div>
  );
};
