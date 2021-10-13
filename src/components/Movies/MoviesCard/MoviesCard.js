import "./MoviesCard.css";
import "./_active/movies-card_active.css"
import { useState } from "react";
import iconSave from "../../../images/icon-save.svg";
import iconDeleteCard from "../../../images/icon-delete.svg";
import { useLocation } from "react-router";

const MoviesCard = ({ movie,
  handleSaveMovie,
  handleDeleteMovie }) => {
  const
    {
      nameRU,
      duration,
      image,
      trailerLink,
      isSaved
    } = movie;
  console.log(isSaved)
  const { pathname } = useLocation();

  const [isClickSaveButton, setIsClickSaveButton] = useState(false)

  const handleClickSaveButton = () => {

    isClickSaveButton
      ? setIsClickSaveButton(false)
      : setIsClickSaveButton(true)

    if (pathname === "/saved-movies") {
      isClickSaveButton
        ? handleSaveMovie({ movie })
        : handleDeleteMovie({ nameRU })

    } else if (pathname === "/movies") {
      isClickSaveButton
        ? handleDeleteMovie({ nameRU })
        : handleSaveMovie({ movie })
    }
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
          src={pathname === "/saved-movies"
            ? image
            : `https://api.nomoreparties.co${image.url}`}
          alt="Картинка фильма" />
      </a>
      <button
        className={pathname === "/saved-movies"
          ? "movies-card__button"
          : `movies-card__button ${isClickSaveButton || isSaved
            ? "movies-card_active"
            : ""}`}
        onClick={handleClickSaveButton}>

        {pathname === "/saved-movies"
          ? (
            <img className="movies-card__button-icon"
              src={iconDeleteCard}
              alt="Кнопка удаления карточки" />
          )
          : isClickSaveButton || isSaved
            ? (
              <img className="movies-card__button-icon"
                src={iconSave}
                alt="Кнопка сохранения карточки" />
            )
            : "Сохранить"}

      </button>
    </li>
  );
};

export default MoviesCard;