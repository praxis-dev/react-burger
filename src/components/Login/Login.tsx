import css from "./Login.module.css";
import {
  Input,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

export const Login = () => {
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
        />
        <div className={css.spacer} />
        <PasswordInput
          onChange={(e) => console.log(e.target.value)}
          value={""}
        />
        <div className={css.spacer} />
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
          <span className={css.urlText}>Зарегистрироваться</span>
        </p>
        <p className={css.textBox}>
          <span className={css.loginText}>Забыли пароль?</span>
          <span className={css.urlText}>Восстановить пароль</span>
        </p>
      </div>
    </div>
  );
};
