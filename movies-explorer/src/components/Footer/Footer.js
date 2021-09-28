import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <h3 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
        <nav className="footer__navigation">
          <div className="footer__copyright">
            &copy;&nbsp;{new Date().getFullYear()}
          </div>
          <ul className="footer__links">
            <li className="footer__item"><a className="footer__link" href='https://practicum.yandex.ru' target="_blank" rel="noreferrer">Яндекс.Практикум</a></li>
            <li className="footer__item"><a className="footer__link" href='https://github.com/George323ru' target="_blank" rel="noreferrer">Github</a></li>
            <li className="footer__item"><a className="footer__link" href='https://ru-ru.facebook.com' target="_blank" rel="noreferrer">Facebook</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default Footer;