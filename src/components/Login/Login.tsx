import css from "./Login.module.css";
import {
  Input,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { emailValidator } from "../../utils/emailValidator";
import { submitOnEnter } from "../../utils/submitOnEnter";
import { useDispatch } from "react-redux";
import { store } from "../../services/store/Store";
import { authUserMiddleware } from "../../services/middleware/authUserMiddleWare";
import { AnyAction } from "redux";

export const Login = () => {
  const navigate = useNavigate();

  const onNewUserClick = () => {
    navigate("/react-burger/new-user");
  };
  const onForgetPasswordClick = () => {
    navigate("/react-burger/forgot-password");
  };

  const [email, setEmail] = useState("");

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const [password, setPassword] = useState("");

  const isNotEmptyString = (str: string) => {
    return str.length > 0;
  };

  const allInputsValid = emailValidator(email) && isNotEmptyString(password);

  const onResponse = (res: any) => {
    console.log(res);
    if (res.success) {
      navigate("/react-burger");
    }
  };

  const handleButtonClick = () => {
    if (allInputsValid) {
      store.dispatch(
        authUserMiddleware({
          email,
          password,
          onResponse,
        }) as unknown as AnyAction
      );
      console.log("button clicked");
    }
  };

  return (
    <div className={css.section}>
      <p className={css.header}>Вход</p>
      <form className={css.form}>
        <Input
          type={"text"}
          placeholder={"E-mail"}
          onChange={(e) => handleEmailChange(e)}
          name={"name"}
          value={email}
          error={false}
          errorText={"Ошибка"}
          size={"default"}
          extraClass={css.spacer}
          onKeyDown={(e) => submitOnEnter(e, handleButtonClick)}
        />
        <PasswordInput
          onChange={(e) => handlePasswordChange(e)}
          value={password}
          extraClass={css.spacer}
          onKeyDown={(e) => submitOnEnter(e, handleButtonClick)}
        />
        <div className={css.button}>
          {" "}
          <Button
            disabled={!allInputsValid}
            htmlType="button"
            type="primary"
            size="large"
            onClick={handleButtonClick}
          >
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
