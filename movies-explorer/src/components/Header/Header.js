import './Header.css';
import './_background_active/header_background_active.css';
import './_position_padding-top/header_position_padding-top.css';
import './_width_small/header_width_small.css';
import logo from '../../images/logo.svg'
import Navigation from '../Navigation/Navigation';
import { useLocation } from 'react-router';

const Header = () => {

  const { pathname } = useLocation();

  const backgroundActive = `${pathname === "/"
    ? "header_background_active"
    : ""}`

  const widthSmall = `${pathname === "/sign-in" || pathname === "/sign-up"
    ? "header_width_small"
    : ""}`

  const headerPadditgTop = `${pathname === "/sign-in" || pathname === "/sign-up"
    ? "header_position_padding-top"
    : ""}`

  return (
    <header className={`header ${headerPadditgTop} ${backgroundActive} ${widthSmall}`}>
      <div className={`header__container`}>
        <img className="header__logo" src={logo} alt="Логотип" />
        <Navigation />
      </div>
    </header>
  )
}

export default Header;