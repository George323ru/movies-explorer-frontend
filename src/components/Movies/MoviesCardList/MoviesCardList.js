import "./MoviesCardList.css";
import Card from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";
import { useState } from "react";

const MoviesCardList = ({
  onLoading,
  moviesSearch,
  isSearchActiv,
  isLoadingFilmSuccess,
  handleSaveMovie,
  handleDeleteMovie,
}) => {
  // eslint-disable-next-line no-unused-vars
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  let maxCardNumber;
  let countAddCard;

  switch (true) {
    case screenWidth > 1133:
      maxCardNumber = 12;
      countAddCard = 3;
      break;
    case screenWidth < 1133 && screenWidth > 786:
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
    setCardsLimit((i) => i + countAddCard);
  };
  console.log(onLoading)
  return (
    <>
      {onLoading ? (
        <Preloader />
      ) : (< section className="movies-card-list">
        {isLoadingFilmSuccess ? (
          <>
            {isSearchActiv ? (
              moviesSearch.length > 0 ? (
                <>
                  <ul className="movies-card-list__container">
                    {moviesSearch
                      .map((movie, id) => (
                        <Card
                          key={id}
                          movie={movie}
                          handleSaveMovie={handleSaveMovie}
                          handleDeleteMovie={handleDeleteMovie}
                        />
                      ))
                      .slice(0, cardsLimit)}
                  </ul>
                  <div className="movies-card-list__pagination">
                    {cardsLimit < moviesSearch.length && (
                      <button
                        className="movies-card-list__append-button"
                        onClick={showMoreCards}
                      >
                        Еще
                      </button>
                    )}
                  </div>
                </>
              ) : (
                <p className="movies-card-list__caption">Ничего не найдено</p>
              )
            ) : (
              ""
            )}
          </>
        ) : (
          <p className="movies-card-list__caption">
            Во время запроса произошла ошибка. Возможно, проблема с
            соединением или сервер недоступен. Подождите немного и попробуйте
            ещё раз.
          </p>
        )}
      </section>)

      }
    </>
  );
};

export default MoviesCardList;
