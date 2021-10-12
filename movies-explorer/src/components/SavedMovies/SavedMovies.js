import './SavedMovies.css';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';

const SavedMovies = ({ handleSaveMovie,
  handleDeleteMovie,
  savedMovies,
  isLoadingFilmSuccess }) => {



  return (
    <section className={``}>
      <SearchForm />
      <MoviesCardList
        movies={savedMovies}
        handleSaveMovie={handleSaveMovie}
        handleDeleteMovie={handleDeleteMovie}
        isLoadingFilmSuccess={isLoadingFilmSuccess} />
    </section>
  )
}

export default SavedMovies;