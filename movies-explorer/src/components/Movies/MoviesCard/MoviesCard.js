
import "./MoviesCard.css";
import moviesPic from "../../../images/card-pic.png"

const MoviesCard = () => {
  return (
    <section className="movies-card">
      <div className="movies-card__title-wrap">
        <h2 className="movies-card__title">В погоне за Бенкси</h2>
        <p className="movies-card__duration">27 минут</p>
      </div>
      <img className="movies-card__image" src={moviesPic} alt="Картика карточки"></img>
      <button className="movies-card__button"></button>
    </section>
  );
};

export default MoviesCard;