import "./FilterCheckbox.css";

const FilterCheckbox = ({ onClick }) => {
  return (
    <section className="filter-checkbox">
      <div className="filter-checkbox__container">
        <label className="filter-checkbox__switch">
          <input
            className="filter-checkbox__checkbox"
            type="checkbox"
            onChange={onClick}></input>
          <span className="filter-checkbox__slider"></span>
        </label>
      </div>
    </section>
  );
};

export default FilterCheckbox;