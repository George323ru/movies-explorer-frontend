import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {

  const { pathname } = useLocation();

  const accauntLinksHidden = `${pathname === "/"
    ? "navigation_hidden"
    : ""}`;

  const navLinksHidden = `${pathname === "/sign-in" || pathname === "/sign-up"
    ? "navigation_hidden"
    : ""}`;

  const authLinksHidden = `${pathname === "/movies" || pathname === "/saved-movies" || pathname === "/profile"
    ? "navigation_hidden"
    : ""}`;


  return (
    <nav className={`navigation ${navLinksHidden}`} >
      <div className={`navigation__links ${authLinksHidden}`}>
        <Link className="navigation__register-link" to="/sign-up">Регистрация</Link>
        <Link className="navigation__login-link" to="/sign-in">Войти</Link>
      </div>
      <div className={`navigation__links ${accauntLinksHidden}`}>
        <Link className="navigation__link" to="/movies">Фильмы</Link>
        <Link className="navigation__link" to="/saved-movies">Сохранённые фильмы</Link>
        <Link className="navigation__link" to="/profile">Аккаунт</Link>
      </div>
    </nav >
  );
};

export default Navigation;