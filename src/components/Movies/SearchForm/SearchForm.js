import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";
import useFormWithValidation from "../../../utils/useFormWithValidation"
import buttonImg from "../../../images/icon-find.svg";

const SearchForm = ({
  handleSearchInput,
  handleCheckboxShortFilm }) => {

  const {
    values,
    handleChange,
    errors,
  } = useFormWithValidation();

  const handleSubmit = (e) => {
    e.preventDefault();

    handleSearchInput(values.movieSearchInput)
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
          value={values.movieSearchInput || ""}
          onChange={handleChange}
          required />
        <button
          className="search-form__button"
          type="submit">
          <img
            className="search-form__button-image"
            src={buttonImg}
            alt="Кнопка поиска"></img>
        </button>
        <span className="search-form__caption">{errors.movieSearchInput}</span>
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