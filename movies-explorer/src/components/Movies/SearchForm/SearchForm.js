import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";
import buttonImg from "../../../images/icon-find.svg";

const SearchForm = () => {
  return (
    <section className="search-form">
      <div className="search-form__container">
        <input className="search-form__input" placeholder="Фильм" required></input>
        <button className="search-form__button">
          <img className="search-form__button-image" src={buttonImg} alt="Кнопка поиска"></img>
        </button>
        <div className="search-form__checkbox-wrap">
          <FilterCheckbox />
          <p className="search-form__name-checkbox">Короткометражки</p>
        </div>
      </div>
    </section>
  );
};

export default SearchForm;