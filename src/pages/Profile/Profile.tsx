import css from "./Profile.module.css";
import {
  Input,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { logoutUserThunk } from "../../services/thunk/logoutUserThunk";
import { getUserDataThunk } from "../../services/thunk/getUserDataThunk";
import { updateUserThunk } from "../../services/thunk/updateUserThunk";
import { AnyAction } from "redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { emailValidator } from "../../utils/emailValidator";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export const Profile = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state: any) => state.ingredients.userData);

  useEffect(() => {
    if (userData) {
      setName(userData.name || "");
      setEmail(userData.email || "");
    }
  }, [userData]);

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
    dispatch(logoutUserThunk() as unknown as AnyAction);
    setTimeout(() => {
      navigate("/react-burger/login");
    }, 1000);
  };

  useEffect(() => {
    dispatch(getUserDataThunk() as unknown as AnyAction);
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (allFieldsValid) {
      dispatch(
        updateUserThunk({
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
            <p className={[css.profileMenuItemText, css.active].join(" ")}>
              Профиль
            </p>
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
        <form className={css.form} onSubmit={(e) => handleSubmit(e)}>
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
              htmlType="submit"
              type="primary"
              size="large"
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