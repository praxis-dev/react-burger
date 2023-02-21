import css from "./Profile.module.css";
import {
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";

export const Profile = () => {
  return (
    <div className={css.section}>
      <div className={css.profileMenuContainer}>
        <div className={css.profileMenu}>
          <div className={css.profileMenuItem}>
            <p className={css.profileMenuItemText}>Профиль</p>
          </div>
          <div className={css.profileMenuItem}>
            <p className={css.profileMenuItemText}>История</p>
          </div>
          <div className={css.profileMenuItem}>
            <p className={css.profileMenuItemText}>Выход</p>
          </div>
        </div>
      </div>
      <div className={css.fieldsContainer}>
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
            type={"text"}
            placeholder={"Логин"}
            onChange={(e) => console.log(e.target.value)}
            name={"Login"}
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
        </form>
      </div>
    </div>
  );
};
