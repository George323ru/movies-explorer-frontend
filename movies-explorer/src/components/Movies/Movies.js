import "./Movies.css";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import moviesApi from "../../utils/MoviesApi"
import Preloader from "./Preloader/Preloader";
import { useEffect, useState } from "react";

const Movies = ({ handleError }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingFilmSuccess, setIsLoadingFilmSuccess] = useState(true);
  const [movies, setMovies] = useState([]);
  const [movieInput, setMovieInput] = useState("");

  const getMovieSearchInput = (dataInput) => {
    setMovieInput(dataInput.toLowerCase())
  }

  useEffect(() => {
    if (movieInput === "") {
      return null;
    } else {
      moviesApi.getBeatFilmMovies()
        .then((res) => {

          function searchFilm(data) {

            return data.filter((item) => {
              const filmNameEN = item.nameEN && item.nameEN.toLowerCase();
              const filmNameRU = item.nameRU && item.nameRU.toLowerCase();

              return (
                filmNameRU && filmNameRU.includes(movieInput)
                || filmNameEN && filmNameEN.includes(movieInput)
              )
            })
          }

          const filterFilm = searchFilm(res)

          setIsLoading(false)
          setMovies(filterFilm)
        }).catch((err) => {
          handleError(err)
          setIsLoadingFilmSuccess(false)
        })
    }

  }, [movieInput])

  return (
    <section className="movies">
      <div className="movies__container">
        <SearchForm handleSearchInput={getMovieSearchInput} />
        {isLoading
          ? <Preloader />
          : (<MoviesCardList
            movies={movies}
            isLoadingFilmSuccess={isLoadingFilmSuccess}
          />)}
      </div>
    </section>
  );
};

export default Movies;