import css from "./Login.module.css";
import {
  Input,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { emailValidator } from "../../utils/emailValidator";
import { authUserThunk } from "../../services/thunk/authUserThunk";
import { AnyAction } from "redux";
import { useSelector } from "react-redux";
import { ingredientsSlice } from "../../services/slice/ingredientsSlice";
import { useDispatch } from "react-redux";

export const Login = () => {
  const dispatch = useDispatch();
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

  const initialLocation = useSelector(
    (state: any) => state.ingredients.userLocation
  );
  const ingredientsInStack = useSelector(
    (state: any) => state.ingredients.ingredientsInStack
  );

  const onResponse = (res: any) => {
    if (res.success) {
      if (
        initialLocation &&
        initialLocation.includes("/react-burger/profile")
      ) {
        navigate(initialLocation);
        dispatch(ingredientsSlice.actions._CLEAR_INITIAL_LOCATION());
      } else {
        console.log("ingredientsInStack", ingredientsInStack);
        navigate("/react-burger/");
      }
    }
  };

  const handleButtonClick = (e: any) => {
    e.preventDefault();
    if (allInputsValid) {
      dispatch(
        authUserThunk({
          email,
          password,
          onResponse,
        }) as unknown as AnyAction
      );
    }
  };

  return (
    <div className={css.section}>
      <p className={css.header}>Вход</p>
      <form className={css.form} onSubmit={(e) => handleButtonClick(e)}>
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
        />
        <PasswordInput
          onChange={(e) => handlePasswordChange(e)}
          value={password}
          extraClass={css.spacer}
        />
        <div className={css.button}>
          {" "}
          <Button
            disabled={!allInputsValid}
            htmlType="submit"
            type="primary"
            size="large"
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
