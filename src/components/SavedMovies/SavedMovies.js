
import './SavedMovies.css';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import { useEffect, useState } from 'react';
import moviesApi from '../../utils/MoviesApi';
import filterShotFilms from '../../utils/filterShotFilms';
import searchFilm from '../../utils/searchFilm';

const SavedMovies = ({ handleSaveMovie,
  handleDeleteMovie,
  savedMovies,
  isLoadingFilmSuccess,
}) => {

  const [movieInput, setMovieInput] = useState("");
  const [isCheckboxShortFilm, setIsCheckboxShortFilm] = useState(false);
  const [movies, setMovies] = useState([]);

  const getMovieSearchInput = (dataInput) => {
    setMovieInput(dataInput.toLowerCase())
  }

  const handleCheckboxShortFilm = () => {
    isCheckboxShortFilm
      ? setIsCheckboxShortFilm(false)
      : setIsCheckboxShortFilm(true)
  }

  useEffect(() => {
    setMovies(savedMovies)
  }, [])

  useEffect(() => {

    if (movieInput === "") {
      return null;
    } else {
      let dataFilms = savedMovies;

      if (isCheckboxShortFilm) {
        dataFilms = filterShotFilms(savedMovies)
      }

      const foundMovies = searchFilm(dataFilms, movieInput)

      setMovies(foundMovies)
    }

  }, [movieInput])

  useEffect(() => {
    console.log(savedMovies)
    const shotrFilms = filterShotFilms(savedMovies)
    console.log(shotrFilms)

    const filterMovies =
      isCheckboxShortFilm === true
        ? shotrFilms
        : savedMovies;

    setMovies(filterMovies)

  }, [isCheckboxShortFilm]);

  return (
    <section className={``}>
      <SearchForm
        handleSearchInput={getMovieSearchInput}
        handleCheckboxShortFilm={handleCheckboxShortFilm} />
      <MoviesCardList
        movies={movies}
        handleSaveMovie={handleSaveMovie}
        handleDeleteMovie={handleDeleteMovie}
        isLoadingFilmSuccess={isLoadingFilmSuccess} />
    </section>
  )
}

export default SavedMovies;