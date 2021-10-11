import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";
import buttonImg from "../../../images/icon-find.svg";
import { useState } from "react";

const SearchForm = ({ handleSearchInput }) => {

  const [movieInput, setMovieInput] = useState("");

  const handleChangeMovie = (e) => {
    setMovieInput(e.target.value);
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearchInput(movieInput)

  };

  return (
    <section className="search-form">
      <form className="search-form__container"
        onSubmit={handleSubmit}>
        <input
          className="search-form__input"
          type="text"
          placeholder="Фильм"
          name="movieSearchInput"
          value={movieInput || ""}
          onChange={handleChangeMovie}
          required />
        <button
          className="search-form__button"
          type="submit">
          <img
            className="search-form__button-image"
            src={buttonImg}
            alt="Кнопка поиска"></img>
        </button>
        <div className="search-form__checkbox-wrap">
          <FilterCheckbox />
          <p className="search-form__name-checkbox">Короткометражки</p>
        </div>
      </form>
    </section>
  );
};

export default SearchForm;