import css from "./ResetPassword.module.css";
import {
  Input,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { resetPasswordApi } from "../../services/api/resetPasswordApi";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export const ResetPassword = () => {
  const initialLocation = useSelector(
    (state: any) => state.ingredients.userLocation
  );

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

  const onResponse = (res: any) => {
    if (res.success) {
      navigate("/react-burger/login");
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    resetPasswordApi({ password, code }).then((res) => {
      onResponse(res);
    });
  };

  useEffect(() => {
    console.log("initialLocation", initialLocation);
    if (initialLocation !== "/react-burger/forgot-password") {
      navigate("/react-burger/");
    }
  }, [initialLocation, navigate]);

  return (
    <div className={css.section}>
      <p className={css.header}>Восстановление пароля</p>
      <form className={css.form} onSubmit={(e) => handleSubmit(e)}>
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
            htmlType="submit"
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