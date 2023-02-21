import css from "./NewPassword.module.css";
import {
  Input,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

export const NewPassword = () => {
  return (
    <div className={css.section}>
      <p className={css.header}>Восстановление пароля</p>
      <form className={css.form}>
        <PasswordInput
          placeholder={"Введите новый пароль"}
          onChange={(e) => console.log(e.target.value)}
          name={"name"}
          value={""}
          size={"default"}
          icon={"ShowIcon"}
          extraClass={css.spacer}
        />
        <Input
          placeholder={"Введите код из письма"}
          onChange={(e) => console.log(e.target.value)}
          name={"name"}
          value={""}
          size={"default"}
          extraClass={css.spacer}
        />
        <div className={css.button}>
          {" "}
          <Button htmlType="button" type="primary" size="large">
            Сохранить
          </Button>
        </div>
      </form>
      <div className={css.link}>
        <p className={css.textBox}>
          <span className={css.loginText}>Вспомнили пароль?</span>
          <span className={css.urlText}>Войти</span>
        </p>
      </div>
    </div>
  );
};
