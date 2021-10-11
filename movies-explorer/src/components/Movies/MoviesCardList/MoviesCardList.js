import "./MoviesCardList.css";
import Card from '../MoviesCard/MoviesCard'
import { useState } from "react";
import Preloader from "../Preloader/Preloader";

const MoviesCardList = ({ movies, isLoadingFilmSuccess }) => {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  let maxCardNumber
  let countAddCard

  switch (true) {
    case screenWidth > 1280:
      maxCardNumber = 12;
      countAddCard = 3;
      break;
    case screenWidth < 1279 && screenWidth > 786:
      maxCardNumber = 8;
      countAddCard = 2;
      break;
    case screenWidth > 320 && screenWidth < 786:
      maxCardNumber = 5;
      countAddCard = 2;
      break;

    default:
      maxCardNumber = 4;
  }

  const [cardsLimit, setCardsLimit] = useState(maxCardNumber);

  const showMoreCards = () => {
    setCardsLimit((i) => i + countAddCard)
  }

  return (
    <>
      {<section className="movies-card-list">
        {isLoadingFilmSuccess ? (<>
          {
            movies.length > 0
              ? (
                <>
                  <ul className="movies-card-list__container">
                    {movies.map(({ id, ...movies }) => (
                      <Card
                        key={id}
                        movie={movies}
                      />
                    )).slice(0, cardsLimit)}
                  </ul>
                  {cardsLimit <= movies.length && (
                    <div className="movies-card-list__pagination">
                      <button
                        className="movies-card-list__append-button"
                        onClick={showMoreCards}>
                        Еще
                      </button>
                    </div>
                  )}
                </>
              )
              : (<p className="movies-card-list__caption">
                Ничего не найдено
              </p>)
          }
        </>)
          : (<p className="movies-card-list__caption">
            Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.
          </p>)}

      </section>}
    </>

  )
};

export default MoviesCardList;