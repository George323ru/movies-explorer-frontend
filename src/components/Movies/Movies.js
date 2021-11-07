import "./Movies.css";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";

import searchFilm from "../../utils/searchFilm";
import filterShotFilms from "../../utils/filterShotFilms";
import checkFilmLike from "../../utils/checkFilmLike";
import { useEffect, useState } from "react";

const Movies = ({
  movies,
  handleSaveMovie,
  handleDeleteMovie,
  savedMovies,
  onLoading,
}) => {

  const [isLoadingFilmSuccess, setIsLoadingFilmSuccess] = useState(true);
  const [isCheckboxShortFilm, setIsCheckboxShortFilm] = useState(false);
  const [isSearchActiv, setIsSearchActiv] = useState(false)
  const [moviesSearch, setMoviesSearch] = useState([]);
  const [movieInput, setMovieInput] = useState("");
  const [isLoadingMovies, setIsLoadingMovies] = useState(false);

  const getMovieSearchInput = (dataInput) => {
    if (dataInput !== undefined) {
      setMovieInput(dataInput.toLowerCase());
      setIsSearchActiv(true)
    }
  };

  const handleCheckboxShortFilm = () => {
    isCheckboxShortFilm
      ? setIsCheckboxShortFilm(false)
      : setIsCheckboxShortFilm(true);
  };

  useEffect(() => {
    setIsLoadingMovies(true)
    if (movieInput === "") {
      setIsLoadingMovies(false)
      return null;
    } else {

      if (isCheckboxShortFilm) {
        filterShotFilms(movies);
      }

      const foundMovies = searchFilm(movies, movieInput);
      const filteredFilm = checkFilmLike(foundMovies, savedMovies);
      setIsLoadingMovies(false)
      setMoviesSearch(filteredFilm);
    }
  }, [movieInput]);

  useEffect(() => {

    if (movies !== null) {
      const foundMovies = searchFilm(movies, movieInput);
      const filteredFilm = checkFilmLike(foundMovies, savedMovies);

      setMoviesSearch(filteredFilm);

      localStorage.setItem("saveMovies", JSON.stringify(filteredFilm));
    }
  }, [savedMovies]);

  useEffect(() => {

    if (moviesSearch !== null) {

      const shotrFilms = filterShotFilms(moviesSearch);

      let filterMovies

      if (isCheckboxShortFilm === true) {
        filterMovies = shotrFilms
      } else {
        filterMovies = searchFilm(movies, movieInput);
      }

      if (moviesSearch) {
        setMoviesSearch(filterMovies);
      }
    }
  }, [isCheckboxShortFilm]);

  return (
    <section className="movies">
      <div className="movies__container">
        <SearchForm
          handleSearchInput={getMovieSearchInput}
          handleCheckboxShortFilm={handleCheckboxShortFilm}
        />
        <MoviesCardList
          onLoading={isLoadingMovies}
          movies={moviesSearch}
          isSearchActiv={isSearchActiv}
          isLoadingFilmSuccess={isLoadingFilmSuccess}
          handleSaveMovie={handleSaveMovie}
          handleDeleteMovie={handleDeleteMovie}
        />

      </div>
    </section>
  );
};

export default Movies;
