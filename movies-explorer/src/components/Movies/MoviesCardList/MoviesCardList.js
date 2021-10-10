import "./MoviesCardList.css";
import Card from '../MoviesCard/MoviesCard'
import { useState } from "react";

const MoviesCardList = ({ movies }) => {

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
  console.log(cardsLimit)
  return (
    <section className="movies-card-list">
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
    </section>
  );
};

export default MoviesCardList;