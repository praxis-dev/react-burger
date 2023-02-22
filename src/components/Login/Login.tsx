import css from "./Login.module.css";
import {
  Input,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const onNewUserClick = () => {
    navigate("/react-burger/new-user");
  };
  const onForgetPasswordClick = () => {
    navigate("/react-burger/forgot-password");
  };

  return (
    <div className={css.section}>
      <p className={css.header}>Вход</p>
      <form className={css.form}>
        <Input
          type={"text"}
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
          value={""}
          extraClass={css.spacer}
        />
        <div className={css.button}>
          {" "}
          <Button htmlType="button" type="primary" size="large">
            Войти
          </Button>
        </div>
      </form>
      <div className={css.link}>
        <p className={css.textBox}>
          <span className={css.loginText}>Вы — новый пользователь?</span>
          <span onClick={onNewUserClick} className={css.urlText}>
            Зарегистрироваться
          </span>
        </p>
        <p className={css.textBox}>
          <span className={css.loginText}>Забыли пароль?</span>
          <span onClick={onForgetPasswordClick} className={css.urlText}>
            Восстановить пароль
          </span>
        </p>
      </div>
    </div>
  );
};
