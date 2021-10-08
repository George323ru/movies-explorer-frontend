import "./Movies.css";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";

const Movies = () => {
  return (
    <section className="movies">
      <div className="movies__container">
        <SearchForm />
        <MoviesCardList />
      </div>
    </section>
  );
};

export default Movies;