import css from "./NewPassword.module.css";
import {
  Input,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const NewPassword = () => {
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");

  const onPasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const onCodeChange = (e: any) => {
    setCode(e.target.value);
  };

  const navigate = useNavigate();

  const onLoginClick = () => {
    navigate("/react-burger/login");
  };

  const isNotEmptyString = (str: string) => {
    return str.length > 0;
  };

  const allFieldsValid = isNotEmptyString(password) && isNotEmptyString(code);

  const onButtonClick = () => {
    console.log("button clicked");
  };

  return (
    <div className={css.section}>
      <p className={css.header}>Восстановление пароля</p>
      <form className={css.form}>
        <PasswordInput
          placeholder={"Введите новый пароль"}
          onChange={(e) => onPasswordChange(e)}
          name={"password"}
          value={password}
          size={"default"}
          icon={"ShowIcon"}
          extraClass={css.spacer}
        />
        <Input
          placeholder={"Введите код из письма"}
          onChange={(e) => onCodeChange(e)}
          name={"code"}
          value={code}
          size={"default"}
          extraClass={css.spacer}
        />
        <div className={css.button}>
          {" "}
          <Button
            disabled={!allFieldsValid}
            htmlType="button"
            type="primary"
            size="large"
          >
            Сохранить
          </Button>
        </div>
      </form>
      <div className={css.link}>
        <p className={css.textBox}>
          <span className={css.loginText}>Вспомнили пароль?</span>
          <span onClick={onLoginClick} className={css.urlText}>
            Войти
          </span>
        </p>
      </div>
    </div>
  );
};
