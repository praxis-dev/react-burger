import css from "./NewUser.module.css";
import {
  Input,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

import { useNavigate } from "react-router-dom";
import { emailValidator } from "../../utils/emailValidator";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { registerNewUserThunk } from "../../services/thunk/registerNewUserThunk";
import { AnyAction } from "redux";

export const NewUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onNameChange = (e: any) => {
    setName(e.target.value);
  };

  const onEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const onPasswordChange = (e: any) => {
    setPassword(e.target.value);
  };
  const navigate = useNavigate();

  const onLoginClick = () => {
    navigate("/react-burger/login");
  };

  const isNotEmptyString = (str: string) => {
    return str.length > 0;
  };

  const allFieldsValid =
    isNotEmptyString(name) &&
    emailValidator(email) &&
    isNotEmptyString(password);

  const dispatch = useDispatch();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (allFieldsValid) {
      dispatch(
        registerNewUserThunk({
          name,
          email,
          password,
          onResponse,
        }) as unknown as AnyAction
      );
    }
  };

  const onResponse = (res: any) => {
    if (res.success) {
      navigate("/react-burger/login");
    }
  };

  return (
    <div className={css.section}>
      <p className={css.header}>Регистрация</p>
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
          type={"email"}
          placeholder={"E-mail"}
          onChange={(e) => onEmailChange(e)}
          name={email}
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
            Зарегистрироваться
          </Button>
        </div>
      </form>
      <div className={css.link}>
        <p className={css.textBox}>
          <span className={css.loginText}>Уже зарегистрированы?</span>
          <span onClick={onLoginClick} className={css.urlText}>
            Войти
          </span>
        </p>
      </div>
    </div>
  );
};
