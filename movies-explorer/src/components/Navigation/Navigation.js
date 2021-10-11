import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";
import "./_hidden/navigation_hidden.css";
import "./_opened/navigation_opened.css";
import accauntLogo from "../../images/icon-accaunt.svg";
import { useState } from "react";

const Navigation = () => {

  const [clickMenuBurger, setClickMenuBurger] = useState(false);
  const { pathname } = useLocation();

  const accauntLinksHidden = `${pathname === "/" ? "navigation_hidden" : ""}`;

  const navLinksHidden = `${pathname === "/sign-in" || pathname === "/sign-up"
    ? "navigation_hidden"
    : ""
    }`;

  const authLinksHidden = `${pathname === "/movies" ||
    pathname === "/saved-movies" ||
    pathname === "/profile"
    ? "navigation_hidden"
    : ""
    }`;



  const handleClickMenuBurger = () => {
    if (clickMenuBurger) {
      setClickMenuBurger(false);
    } else {
      setClickMenuBurger(true);
    }
  };

  return (
    <nav className={`navigation ${navLinksHidden}`}>

      <div className={`navigation__burger-button ${accauntLinksHidden}`}>
        <input id="navigation__menu-toggle" type="checkbox" />
        <label
          onClick={handleClickMenuBurger}
          className="navigation__menu-btn"
          htmlFor="navigation__menu-toggle">
          <span></span>
        </label>
      </div>

      <ul className={`navigation__links ${authLinksHidden}`}>
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
      <div className={`navigation__sublayer ${!clickMenuBurger ? "navigation_hidden" : ""}`}></div>
      <ul className={`navigation__links navigation__links_column navigation__links_visibility_off ${accauntLinksHidden} ${clickMenuBurger ? "navigation_opened" : ""}`}>
        <li className="navigation__links-item navigation_hidden-link navigation__links-item_margin_null">
          <Link className="navigation__main-link" to="/">
            Главная
          </Link>
        </li>
        <li className="navigation__links-item navigation__links-item_direction_column navigation__links-item_margin_null">
          <Link className="navigation__movies-link" to="/movies">
            Фильмы
          </Link>
          <Link className="navigation__save-films-link" to="/saved-movies">
            Сохранённые фильмы
          </Link>
        </li>
        <li className="navigation__links-item">
          <Link className="navigation__profile-link" to="/profile">
            Аккаунт
            <img className="navigation__accaunt-image" src={accauntLogo} alt="Логотип аккаунта"></img>
          </Link>
        </li>
      </ul>

    </nav >
  );
};

export default Navigation;
