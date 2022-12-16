import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'

function AppHeader() {
    return (
      <div className="App">
        <header>
            <div className="header__icon-with-text"><BurgerIcon type="primary"/><p>Конструктор</p></div>
        <div className="header__icon-with-text"><ListIcon type="primary"/><div className="p">Лента заказов</div>
</div>
<Logo />
<div className="header__icon-with-text">
<ProfileIcon type="primary"/> 
<p>Личный кабинет</p>
</div>
        </header>
      </div>
    );
  }
  
  export default AppHeader;
  