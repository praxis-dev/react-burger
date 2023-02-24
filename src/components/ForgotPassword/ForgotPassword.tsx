import css from "./ForgotPassword.module.css";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

import { useNavigate } from "react-router-dom";
import { forgotPasswordApi } from "../../services/api/forgotPasswordApi";
import { useState } from "react";
import { emailValidator } from "../../utils/emailValidator";

export const ForgotPassword = () => {
  const navigate = useNavigate();

  const onLoginClick = () => {
    navigate("/react-burger/login");
  };

  const [email, setEmail] = useState("");

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const onResponse = (res: any) => {
    if (res.success) {
      navigate("/react-burger/new-password");
    }
  };

  const onButtonClick = () => {
    forgotPasswordApi(email).then((res) => onResponse(res));
  };

  const pressButtonOnEnter = (e: any) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      onButtonClick();
    }
  };

  return (
    <div className={css.section}>
      <p className={css.header}>Восстановление пароля </p>
      <form className={css.form}>
        <Input
          onChange={(e) => handleEmailChange(e)}
          type={"text"}
          placeholder={"Укажите e-mail"}
          name={"name"}
          value={email}
          error={false}
          errorText={"Ошибка"}
          size={"default"}
          extraClass={css.spacer}
          onKeyDown={pressButtonOnEnter}
        />
        <div className={css.button}>
          {" "}
          <Button
            disabled={!emailValidator(email)}
            onClick={() => {
              onButtonClick();
            }}
            htmlType="button"
            type="primary"
            size="large"
          >
            Восстановить
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
