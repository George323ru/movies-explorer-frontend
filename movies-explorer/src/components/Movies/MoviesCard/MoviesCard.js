import "./MoviesCard.css";
import "./_active/movies-card_active.css"
import moviesPic from "../../../images/card-pic.png"
import { useState } from "react";
import iconSave from "../../../images/icon-save.svg"

const MoviesCard = () => {

  const [clickSaveButton, setClickSaveButton] = useState('Сохранить');
  const [saveButtonColor, setSaveButtonColor] = useState(false);

  const handltClickSaveButton = () => {
    clickSaveButton === 'Сохранить'
      ? setClickSaveButton((<img className="movies-card__button-icon" src={iconSave} alt="Кнопка сохранения карточки"></img>))
      : setClickSaveButton('Сохранить');

    saveButtonColor
      ? setSaveButtonColor(false)
      : setSaveButtonColor(true)
  }

  return (
    <section className="movies-card">
      <div className="movies-card__title-wrap">
        <h2 className="movies-card__title">В погоне за Бенкси</h2>
        <p className="movies-card__duration">27 минут</p>
      </div>
      <img className="movies-card__image" src={moviesPic} alt="Картика карточки"></img>
      <button className={`movies-card__button ${saveButtonColor ? "movies-card_active" : ""}`} onClick={handltClickSaveButton}>
        {clickSaveButton}
      </button>
    </section>
  );
};

export default MoviesCard;