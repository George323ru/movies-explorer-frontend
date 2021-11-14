
import './SavedMovies.css';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import { useEffect, useState } from 'react';
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
  const [isSearchActiv, setIsSearchActiv] = useState(false)

  const getMovieSearchInput = (dataInput) => {
    setMovieInput(dataInput.toLowerCase())

  }

  const handleCheckboxShortFilm = () => {
    isCheckboxShortFilm
      ? setIsCheckboxShortFilm(false)
      : setIsCheckboxShortFilm(true)
  }

  useEffect(() => {
    setIsSearchActiv(true)
  }, [])

  useEffect(() => {
    setMovies(savedMovies)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [savedMovies])

  useEffect(() => {

    if (movieInput === "") {
      return null;
    } else {

      if (isCheckboxShortFilm) {
        filterShotFilms(savedMovies)
      }

      const foundMovies = searchFilm(savedMovies, movieInput)

      setMovies(foundMovies)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieInput])

  useEffect(() => {

    const shotrFilms = filterShotFilms(savedMovies)

    const filterMovies =
      isCheckboxShortFilm === true
        ? shotrFilms
        : savedMovies;

    setMovies(filterMovies)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCheckboxShortFilm]);

  return (
    <section className={``}>
      <SearchForm
        handleSearchInput={getMovieSearchInput}
        handleCheckboxShortFilm={handleCheckboxShortFilm} />
      <MoviesCardList
        moviesSearch={movies}
        isSearchActiv={isSearchActiv}
        handleSaveMovie={handleSaveMovie}
        handleDeleteMovie={handleDeleteMovie}
        isLoadingFilmSuccess={isLoadingFilmSuccess} />
    </section>
  )
}

export default SavedMovies;