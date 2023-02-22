import css from "./ForgotPassword.module.css";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

import { useNavigate } from "react-router-dom";

export const ForgotPassword = () => {
  const navigate = useNavigate();

  const onLoginClick = () => {
    navigate("/react-burger/login");
  };

  return (
    <div className={css.section}>
      <p className={css.header}>Восстановление пароля </p>
      <form className={css.form}>
        <Input
          type={"text"}
          placeholder={"Укажите e-mail"}
          onChange={(e) => console.log(e.target.value)}
          name={"name"}
          value={""}
          error={false}
          errorText={"Ошибка"}
          size={"default"}
          extraClass={css.spacer}
        />
        <div className={css.button}>
          {" "}
          <Button htmlType="button" type="primary" size="large">
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
