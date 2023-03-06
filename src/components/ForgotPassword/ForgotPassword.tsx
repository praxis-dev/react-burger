import css from "./ForgotPassword.module.css";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

import { useNavigate } from "react-router-dom";
import { forgotPasswordApi } from "../../services/api/forgotPasswordApi";
import { useState } from "react";
import { emailValidator } from "../../utils/emailValidator";
import { useEffect } from "react";
import { ingredientsSlice } from "../../services/slice/ingredientsSlice";

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
    console.log(res);
    if (res.success) {
      navigate("/react-burger/reset-password");
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    forgotPasswordApi(email).then((res) => onResponse(res));
  };

  return (
    <div className={css.section}>
      <p className={css.header}>Восстановление пароля </p>
      <form className={css.form} onSubmit={(e) => handleSubmit(e)}>
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
        />
        <div className={css.button}>
          {" "}
          <Button
            disabled={!emailValidator(email)}
            htmlType="submit"
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
