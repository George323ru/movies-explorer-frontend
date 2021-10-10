import "./Movies.css";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import moviesApi from "../../utils/MoviesApi"
import Preloader from "./Preloader/Preloader";
import { useEffect, useState } from "react";

const Movies = () => {

  const [movies, setMovies] = useState([])

  useEffect(() => {
    moviesApi.getBeatFilmMovies()
      .then((res) => setMovies(res))
  }, [])



  console.log(movies)

  return (
    <section className="movies">
      <div className="movies__container">
        <SearchForm />
        {/* <Preloader /> */}
        <MoviesCardList
          movies={movies}
        />
      </div>
    </section>
  );
};

export default Movies;