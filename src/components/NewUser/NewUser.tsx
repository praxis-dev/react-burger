import css from "./NewUser.module.css";
import {
  Input,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

import { useNavigate } from "react-router-dom";

export const NewUser = () => {
  const navigate = useNavigate();

  const onLoginClick = () => {
    navigate("/react-burger/login");
  };

  return (
    <div className={css.section}>
      <p className={css.header}>Регистрация</p>
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
          type={"email"}
          placeholder={"E-mail"}
          onChange={(e) => console.log(e.target.value)}
          name={"name"}
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
        <div className={css.button}>
          {" "}
          <Button htmlType="button" type="primary" size="large">
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
