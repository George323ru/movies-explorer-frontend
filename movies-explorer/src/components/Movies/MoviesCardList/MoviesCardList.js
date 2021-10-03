import "./MoviesCardList.css";
import Card from '../MoviesCard/MoviesCard'

const MoviesCardList = () => {
  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__container">
        <li><Card /></li>
        <li><Card /></li>
        <li><Card /></li>
        <li><Card /></li>
        <li><Card /></li>
        <li><Card /></li>
        <li><Card /></li>
        <li><Card /></li>
        <li><Card /></li>
        <li><Card /></li>
      </ul>
      <div className="movies-card-list__pagination">
        <button className="movies-card-list__append-button">
          Еще
        </button>
      </div>
    </section>
  );
};

export default MoviesCardList;