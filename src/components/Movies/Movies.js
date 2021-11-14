import "./Movies.css";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";

import searchFilm from "../../utils/searchFilm";
import filterShotFilms from "../../utils/filterShotFilms";
import checkFilmLike from "../../utils/checkFilmLike";
import { useEffect, useState } from "react";
import moviesApi from "../../utils/MoviesApi";

const Movies = ({
  handleSaveMovie,
  handleDeleteMovie,
  savedMovies,
  onLoadingAllMovies
}) => {

  const [isLoadingFilmSuccess, setIsLoadingFilmSuccess] = useState(true);
  const [isCheckboxShortFilm, setIsCheckboxShortFilm] = useState(false);
  const [movies, setMovies] = useState([]);
  const [isSearchActiv, setIsSearchActiv] = useState(false)
  const [moviesSearch, setMoviesSearch] = useState([]);
  const [movieInput, setMovieInput] = useState("");
  const [isLoadingMovies, setIsLoadingMovies] = useState(false);

  const getMovieSearchInput = (dataInput) => {
    console.log(dataInput)
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
    console.log(movies)
    isCheckboxShortFilm && filterShotFilms(movies);

    const foundMovies = searchFilm(movies, movieInput);
    const filteredFilm = checkFilmLike(foundMovies, savedMovies);
    setMoviesSearch(filteredFilm);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movies, movieInput])

  useEffect(() => {
    if (movieInput === "") {
      return null;
    } else {

      if (movies.length === 0) {
        setIsLoadingMovies(true)
        moviesApi
          .getBeatFilmMovies()
          .then((films) => {
            console.log(films)
            setIsLoadingMovies(false)
            setIsLoadingFilmSuccess(true)
            setMovies(films);

          })
          .catch((err) => {
            setIsLoadingMovies(false)
            setIsLoadingFilmSuccess(false)
            console.log(err)
          });
      }

    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieInput]);

  useEffect(() => {

    if (movies !== null) {
      const foundMovies = searchFilm(movies, movieInput);
      const filteredFilm = checkFilmLike(foundMovies, savedMovies);

      setMoviesSearch(filteredFilm);

    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

      moviesSearch && setMoviesSearch(filterMovies);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCheckboxShortFilm]);

  return (
    <section className="movies">
      <div className="movies__container">
        <SearchForm
          onLoadingAllMovies={onLoadingAllMovies}
          handleSearchInput={getMovieSearchInput}
          handleCheckboxShortFilm={handleCheckboxShortFilm}
        />
        <MoviesCardList
          onLoading={isLoadingMovies}
          moviesSearch={moviesSearch}
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
