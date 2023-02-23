import css from "./NewUser.module.css";
import {
  Input,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

import { useNavigate } from "react-router-dom";
import { emailValidator } from "../../utils/emailValidator";
import { submitOnEnter } from "../../utils/submitOnEnter";
import { useState } from "react";

import { store } from "../../services/store/Store";
import { registerNewUserMiddleware } from "../../services/middleware/registerNewUserMiddleware";
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

  const onButtonClick = () => {
    if (allFieldsValid) {
      store.dispatch(
        registerNewUserMiddleware({
          name,
          email,
          password,
          onResponse,
        }) as unknown as AnyAction
      );
    }
  };

  const onResponse = (res: any) => {
    console.log(res);
    if (res.success) {
      navigate("/react-burger/login");
    }
  };

  const pressButtonOnEnter = (e: any) => {
    submitOnEnter(e, onButtonClick);
  };

  return (
    <div className={css.section}>
      <p className={css.header}>Регистрация</p>
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
          onKeyDown={pressButtonOnEnter}
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
          onKeyDown={pressButtonOnEnter}
        />
        <PasswordInput
          onChange={(e) => onPasswordChange(e)}
          placeholder={password}
          value={password}
          extraClass={css.spacer}
          onKeyDown={pressButtonOnEnter}
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
