import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";
import "./_hidden/navigation_hidden.css"
import accauntLogo from "../../images/icon-accaunt.svg";

const Navigation = () => {
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

  }

  return (
    <nav className={`navigation ${navLinksHidden}`}>

      <div className="navigation__burger-button">
        <input id="navigation__menu-toggle" type="checkbox" />
        <label
          onClick={handleClickMenuBurger}
          className="navigation__menu-btn"
          for="navigation__menu-toggle">
          <span></span>
        </label>
      </div>

      <ul className={`navigation__links ${authLinksHidden}`}>
        <li className="navigation__links-item">
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
      <ul className={`navigation__links ${accauntLinksHidden}`}>
        <li className="navigation__links-item">
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
    </nav>
  );
};

export default Navigation;
