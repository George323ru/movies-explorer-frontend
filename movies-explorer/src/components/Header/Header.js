import './Header.css';
import { Link } from "react-router-dom";
import logo from '../../images/logo.svg'

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <img className="header__logo" src={logo} />
      </div>
    </header>
  )
}

export default Header;