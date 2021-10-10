import "./Movies.css";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import moviesApi from "../../utils/MoviesApi"

const Movies = () => {

  moviesApi.getBeatFilmMovies()
    .then((res) => console.log(res))


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