import './SavedMovies.css';
import { useLocation } from 'react-router';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';

const SavedMovies = () => {



  return (
    <section className={``}>
      <SearchForm />
      <MoviesCardList />


    </section>
  )
}

export default SavedMovies;