import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";
import "./_hidden/navigation_hidden.css";
import "./_opened/navigation_opened.css";
import "./_active/navigation__menu-toggle_active.css"
import accauntLogo from "../../images/icon-accaunt.svg";
import { useState } from "react";

const Navigation = ({ isLogin }) => {
  const [clickMenuBurger, setClickMenuBurger] = useState(false);
  const { pathname } = useLocation();

  const navLinksHidden = `${pathname === "/sign-in"
    || pathname === "/sign-up"
    ? "navigation_hidden"
    : ""
    }`;

  const handleClickMenuBurger = () => {
    clickMenuBurger
      ? setClickMenuBurger(false)
      : setClickMenuBurger(true);
  };

  return (
    <nav className={`navigation ${navLinksHidden}`}>
      <div
        className={`navigation__burger-button ${!isLogin && "navigation_hidden"
          } 
      `}
      >
        <input
          className={`navigation__menu-toggle
         `}
          id="navigation__menu-toggle"
          type="checkbox"
        />
        <label
          onClick={handleClickMenuBurger}
          className="navigation__menu-btn"
          htmlFor="navigation__menu-toggle"
        >
          <span></span>
        </label>
      </div>

      <ul
        className={`navigation__links 
      ${isLogin && "navigation_hidden"}`}
      >
        <li className="navigation__links-item ">
          <Link className="navigation__register-link" to="/sign-up">
            Регистрация
          </Link>
        </li>
        <li className="navigation__links-item">
          <Link className="navigation__login-link" to="/sign-in">
            Войти
          </Link>
        </li>
      </ul>

      <div
        className={`navigation__sublayer 
      ${!clickMenuBurger && "navigation_hidden"}`}
      ></div>
      <ul
        className={`navigation__links 
      navigation__links_column 
      navigation__links_visibility_off 
     ${!isLogin && "navigation_hidden"}
      ${clickMenuBurger && "navigation_opened"}`}
      >
        <li
          className="navigation__links-item 
        navigation_hidden-link 
        navigation__links-item_margin_null"
        >
          <Link
            className="navigation__main-link"
            to="/"
            onClick={handleClickMenuBurger}
          >
            Главная
          </Link>
        </li>
        <li className="navigation__links-item navigation__links-item_direction_column navigation__links-item_margin_null">
          <Link
            className="navigation__movies-link "
            to="/movies"
            onClick={handleClickMenuBurger}
          >
            Фильмы
          </Link>
          <Link
            className="navigation__save-films-link"
            to="/saved-movies"
            onClick={handleClickMenuBurger}
          >
            Сохранённые фильмы
          </Link>
        </li>
        <li className="navigation__links-item">
          <Link
            className="navigation__profile-link"
            to="/profile"
            onClick={handleClickMenuBurger}
          >
            Аккаунт
            <img
              className="navigation__accaunt-image"
              src={accauntLogo}
              alt="Логотип аккаунта"
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
