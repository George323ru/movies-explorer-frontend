import './Portfolio.css';
import iconArrow from '../../../images/icon-arrow.svg'

const Portfolio = () => {
  return (
    <section className="portfolio">
      <div className="portfolio__container">
        <h2 className="portfolio__title">Портфолио</h2>
        <ul className="portfolio__products">
          <li className="portfolio__item">
            <a className="portfolio__link" href="https://github.com/George323ru/how-to-learn" target="_blank" rel="noreferrer">Статичный сайт</a>
            <a href="https://github.com/George323ru/how-to-learn" target="_blank" rel="noreferrer"><img className="portfolio__image" src={iconArrow} alt="Ссылка на проект"></img></a>
          </li>
          <li className="portfolio__item">
            <a className="portfolio__link" href="https://github.com/George323ru/russian-travel" target="_blank" rel="noreferrer">Адаптивный сайт</a>
            <a href="https://github.com/George323ru/russian-travel" target="_blank" rel="noreferrer"><img src={iconArrow} alt="Ссылка на проект"></img></a>
          </li>
          <li className="portfolio__item">
            <a className="portfolio__link" href="https://github.com/George323ru/react-mesto-api-full" target="_blank" rel="noreferrer">Одностраничное приложение</a>
            <a href="https://github.com/George323ru/react-mesto-api-full" target="_blank" rel="noreferrer"><img src={iconArrow} alt="Ссылка на проект"></img></a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Portfolio;