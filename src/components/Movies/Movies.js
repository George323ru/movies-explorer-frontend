import "./Movies.css";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import moviesApi from "../../utils/MoviesApi"
import Preloader from "./Preloader/Preloader";
import searchFilm from "../../utils/searchFilm";
import filterShotFilms from "../../utils/filterShotFilms";
import checkFilmLike from "../../utils/checkFilmLike";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";

const Movies = ({
  handleError,
  handleSaveMovie,
  handleDeleteMovie,
  savedMovies }) => {

  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingFilmSuccess, setIsLoadingFilmSuccess] = useState(true);
  const [isCheckboxShortFilm, setIsCheckboxShortFilm] = useState(false)
  const [movies, setMovies] = useState([]);
  const [movieInput, setMovieInput] = useState("");

  const { pathname } = useLocation();

  const getMovieSearchInput = (dataInput) => {
    setMovieInput(dataInput.toLowerCase())
  }

  const handleCheckboxShortFilm = () => {
    isCheckboxShortFilm
      ? setIsCheckboxShortFilm(false)
      : setIsCheckboxShortFilm(true)
  }

  useEffect(() => {

    if (movieInput === "") {
      return null;
    } else {
      moviesApi.getBeatFilmMovies()
        .then((res) => {

          let dataFilms = res;

          if (isCheckboxShortFilm) {
            dataFilms = filterShotFilms(res)
          }

          const foundMovies = searchFilm(dataFilms, movieInput)
          const filteredFilm = checkFilmLike(foundMovies, savedMovies)

          localStorage.setItem(
            "saveMovies",
            JSON.stringify(filteredFilm)
          );

          setIsLoading(false)
          setMovies(filteredFilm)
        }).catch((err) => {
          handleError(err)
          setIsLoadingFilmSuccess(false)
        })
    }

  }, [movieInput])

  useEffect(() => {
    const storageFilm = JSON.parse(localStorage.getItem("saveMovies"));

    if (storageFilm !== null) {

      const filteredFilm = checkFilmLike(storageFilm, savedMovies)

      setMovies(filteredFilm)

      localStorage.setItem(
        "saveMovies",
        JSON.stringify(filteredFilm)
      );
    }

  }, [savedMovies])

  useEffect(() => {

    const storageFilm = JSON.parse(localStorage.getItem("saveMovies"));

    if (storageFilm !== null) {
      const shotrFilms = filterShotFilms(storageFilm)

      const filterMovies =
        isCheckboxShortFilm === true
          ? shotrFilms
          : storageFilm;

      if (storageFilm) {
        setMovies(filterMovies)
      }
    }

  }, [isCheckboxShortFilm]);

  useEffect(() => {
    const storageFilm = JSON.parse(localStorage.getItem("saveMovies"));

    if (storageFilm !== null) {
      setMovies(storageFilm)
    }

  }, [pathname])

  return (
    <section className="movies">
      <div className="movies__container">
        <SearchForm
          handleSearchInput={getMovieSearchInput}
          handleCheckboxShortFilm={handleCheckboxShortFilm} />
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