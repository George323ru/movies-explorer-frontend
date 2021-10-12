import './SavedMovies.css';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';

const SavedMovies = ({ savedMovies, isLoadingFilmSuccess }) => {



  return (
    <section className={``}>
      <SearchForm />
      <MoviesCardList
        movies={savedMovies}
        isLoadingFilmSuccess={isLoadingFilmSuccess} />
    </section>
  )
}

export default SavedMovies;