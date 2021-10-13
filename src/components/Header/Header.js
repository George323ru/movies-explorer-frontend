import './Header.css';
import './_active/header_active.css'
import './_background_active/header_background_active.css';
import './_position_padding-top/header_position_padding-top.css';
import './_width_small/header_width_small.css';
import './_position_sticky/header_position_sticky.css';
import './_justify-content_center/header_justify-content_center.css'
import logo from '../../images/logo.svg'
import Navigation from '../Navigation/Navigation';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

const Header = ({ isLogin }) => {

  const { pathname } = useLocation();

  const headerActive = `${pathname === "/"
    || pathname === "/sign-in"
    || pathname === "/sign-up"
    || pathname === "/saved-movies"
    || pathname === "/movies"
    || pathname === "/profile"
    ? "header_active"
    : ""}`

  const headerPositionSticky = `${pathname === "/"
    || pathname === "/saved-movies"
    || pathname === "/movies"
    || pathname === "/profile"
    ? "header_position_sticky"
    : ""}`

  const headerContentCenter = `${pathname === "/sign-in"
    || pathname === "/sign-up"
    ? "header_justify-content_center"
    : ""}`

  const backgroundActive = `${pathname === "/"
    ? "header_background_active"
    : ""}`

  const widthSmall = `${pathname === "/sign-in"
    || pathname === "/sign-up"
    ? "header_width_small"
    : ""}`

  const headerPadditgTop = `${pathname === "/sign-in"
    || pathname === "/sign-up"
    ? "header_position_padding-top"
    : ""}`

  const headerDeactivePadding = `${pathname === "/sign-in" || pathname === "/sign-up"
    ? "header_deactive_padding"
    : ""}`

  return (
    <header className={`header ${headerActive} ${headerPadditgTop} ${backgroundActive} ${widthSmall} ${headerPositionSticky} `}>
      <div className={`header__container ${headerDeactivePadding} ${headerContentCenter}`}>
        <Link className="header__link-logo" to="/">
          <img className="header__logo" src={logo} alt="Логотип" />
        </Link>

        <Navigation isLogin={isLogin} />
      </div>
    </header>
  )
}

export default Header;