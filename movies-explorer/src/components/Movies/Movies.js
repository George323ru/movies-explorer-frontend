import "./Movies.css";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import moviesApi from "../../utils/MoviesApi"
import Preloader from "./Preloader/Preloader";
import searchFilm from "../../utils/searchFilm";
import { useEffect, useState } from "react";

const Movies = ({
  handleError,
  handleSaveMovie,
  handleDeleteMovie }) => {

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

          const foundMovies = searchFilm(res, movieInput)

          localStorage.setItem(
            "savedMovies",
            JSON.stringify(foundMovies)
          );

          setIsLoading(false)
          setMovies(foundMovies)
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
            handleSaveMovie={handleSaveMovie}
            handleDeleteMovie={handleDeleteMovie}
          />)}
      </div>
    </section>
  );
};

export default Movies;