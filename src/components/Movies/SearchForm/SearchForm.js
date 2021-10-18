import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";
import buttonImg from "../../../images/icon-find.svg";
import { useState } from "react";

const SearchForm = ({
  handleSearchInput,
  handleCheckboxShortFilm }) => {

    const [movieInputSearch, setMovieInputSearch] = useState(" ");
    const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
  
if(movieInputSearch === " " ){
  setErrorMessage("Нужно ввести ключевое слово")    
  } else {
    handleSearchInput(movieInputSearch)
    setErrorMessage("")
  }
  };

  return (
    <section className="search-form">
      <form className="search-form__container"
        noValidate
        onSubmit={handleSubmit}>
        <input
          className="search-form__input"
          type="text"
          placeholder="Фильм"
          name="movieSearchInput"
          value={movieInputSearch}
          onChange={(e) => setMovieInputSearch(e.target.value)}         
          required />
        <button
          className="search-form__button"
          type="submit">
          <img
            className="search-form__button-image"
            src={buttonImg}
            alt="Кнопка поиска"></img>
        </button>
        <span className="search-form__caption">{errorMessage}</span>
        <div className="search-form__checkbox-wrap">
          <FilterCheckbox
            onClick={handleCheckboxShortFilm} />
          <p className="search-form__name-checkbox">Короткометражки</p>
        </div>
      </form>
    </section>
  );
};

export default SearchForm;