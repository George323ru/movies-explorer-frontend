import "./MoviesCard.css";
import "./_active/movies-card_active.css"
import { useEffect, useState } from "react";
import iconSave from "../../../images/icon-save.svg";
import iconDeleteCard from "../../../images/icon-delete.svg";
import { useLocation } from "react-router";

const MoviesCard = ({ movie, handleSaveMovie }) => {
  const
    {
      nameRU,
      duration,
      image,
      trailerLink,
    } = movie;

  const { pathname } = useLocation();

  const [labelSaveButton, setLabelSaveButton] = useState('');
  const [isClickSaveButton, setIsClickSaveButton] = useState(false)

  useEffect(() => {
    pathname === "/saved-movies"
      ? setLabelSaveButton((<img className="movies-card__button-icon" src={iconDeleteCard} alt="Иконка удаления карточки" />))
      : setLabelSaveButton('Сохранить')

  }, [pathname]);

  const handleClickSaveButton = () => {

    isClickSaveButton
      ? setIsClickSaveButton(false)
      : setIsClickSaveButton(true)

    handleSaveMovie({ movie })
  }

  return (

    <li className="movies-card">
      <div className="movies-card__title-wrap">
        <h2 className="movies-card__title">{nameRU}</h2>
        <p className="movies-card__duration">{`${duration} минут`}</p>
      </div>
      <a
        className="movies-card__link-image"
        href={trailerLink}
        target="_blank"
        rel="noreferrer">
        <img
          className="movies-card__image"
          src={`https://api.nomoreparties.co${image.url}`}
          alt="Картинка фильма" />
      </a>
      <button
        className={`movies-card__button ${isClickSaveButton ? "movies-card_active" : ""}`}
        onClick={handleClickSaveButton}>
        {pathname === "/saved-movies"
          ? (<img className="movies-card__button-icon" src={iconDeleteCard} alt="Кнопка сохранения карточки" />)
          : isClickSaveButton
            ? (
              <img className="movies-card__button-icon" src={iconSave} alt="Кнопка сохранения карточки" />
            )
            : "Сохранить"}
      </button>
    </li>

  );
};

export default MoviesCard;