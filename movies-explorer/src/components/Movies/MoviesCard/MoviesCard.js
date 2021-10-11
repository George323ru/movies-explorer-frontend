import "./MoviesCard.css";
import "./_active/movies-card_active.css"
import { useEffect, useState } from "react";
import iconSave from "../../../images/icon-save.svg";
import iconDeleteCard from "../../../images/icon-delete.svg";
import { useLocation } from "react-router";

const MoviesCard = ({ movie }) => {
  const
    {
      nameRU,
      duration,
      image,
      trailerLink,
    } = movie;

  const { pathname } = useLocation();

  const [clickSaveButton, setClickSaveButton] = useState('');
  const [saveButtonColor, setSaveButtonColor] = useState(false);

  useEffect(() => {
    if (pathname === "/saved-movies") {
      setClickSaveButton((<img className="movies-card__button-icon" src={iconDeleteCard} alt="Кнопка удаления карточки"></img>));
    } else {
      setClickSaveButton('Сохранить')
    }
  }, [pathname]);

  const handleClickSaveButton = () => {
    if (pathname === "/saved-movies") {
      setClickSaveButton((<img className="movies-card__button-icon" src={iconDeleteCard} alt="Кнопка сохранения карточки"></img>));
    } else {
      clickSaveButton === 'Сохранить'
        ? setClickSaveButton((<img className="movies-card__button-icon" src={iconSave} alt="Кнопка сохранения карточки"></img>))
        : setClickSaveButton('Сохранить');

      saveButtonColor
        ? setSaveButtonColor(false)
        : setSaveButtonColor(true)
    }

  }

  return (
    <li className="movies-card">
      <div className="movies-card__title-wrap">
        <h2 className="movies-card__title">{nameRU}</h2>
        <p className="movies-card__duration">{`${duration} минут`}</p>
      </div>
      <a className="movies-card__link-image"
        href={trailerLink}
        target="_blank"
        rel="noreferrer">
        <img className="movies-card__image" src={`https://api.nomoreparties.co${image.url}`} alt="Картинка фильма"></img>
      </a>
      <button className={`movies-card__button ${saveButtonColor ? "movies-card_active" : ""}`} onClick={handleClickSaveButton}>
        {clickSaveButton}
      </button>
    </li>
  );
};

export default MoviesCard;