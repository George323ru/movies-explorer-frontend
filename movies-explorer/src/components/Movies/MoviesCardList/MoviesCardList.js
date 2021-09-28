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
        <li><Card /></li>
        <li><Card /></li>
      </ul>
    </section>
  );
};

export default MoviesCardList;