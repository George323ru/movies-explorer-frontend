import "./NotFoundPage.css";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <section className="not-found-page">
      <div className="not-found-page__container">
        <h2 className="not-found-page__title">404</h2>
        <p className="not-found-page__subtitle">Страница не найдена</p>
        <Link className='not-found-page__link' to='/sign-up'>
          Назад
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;