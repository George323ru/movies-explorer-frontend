import './Portfolio.css';

const Portfolio = () => {
  return (
    <section className="portfolio">
      <div className="portfolio__container">
        <h2 className="portfolio__title">Портфолио</h2>
        <ul className="portfolio__products">
          <li className="portfolio__item">
            <a className="portfolio__link" href="#">Статичный сайт</a>
            <a href="#"><img className="portfolio__image" src="../../../images/text__COLOR_font-main.svg" alt="Ссылка на проект"></img></a>
          </li>
          <li className="portfolio__item">
            <a className="portfolio__link" href="#" >Адаптивный сайт</a>
            <a href="#"><img src="../../../images/text__COLOR_font-main.svg" alt="Ссылка на проект"></img></a>
          </li>
          <li className="portfolio__item">
            <a className="portfolio__link" href="#">Одностраничное приложение</a>
            <a href="#"><img src="../../../images/text__COLOR_font-main.svg" alt="Ссылка на проект"></img></a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Portfolio;