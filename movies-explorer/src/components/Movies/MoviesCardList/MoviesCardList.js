import "./MoviesCardList.css";
import Card from '../MoviesCard/MoviesCard'

const MoviesCardList = ({ movies }) => {

  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__container">
        {movies.map(({ id, ...movies }) => (
          <Card
            key={id}
            movie={movies}
          />
        ))}
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