import './Header.css';
import logo from '../../images/logo.svg'
import Navigation from '../Navigation/Navigation';

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <img className="header__logo" src={logo} alt="Логотип" />
        <Navigation />
      </div>
    </header>
  )
}

export default Header;