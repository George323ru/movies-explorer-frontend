import "./MoviesCardList.css";
import Card from '../MoviesCard/MoviesCard'
import { useState } from "react";

const MoviesCardList = ({ movies }) => {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  console.log(screenWidth)


  let maxCardNumber

  switch (true) {
    case screenWidth > 1280:
      maxCardNumber = 12
      break;
    case screenWidth < 1279 && screenWidth > 786:
      maxCardNumber = 8
      break;
    case screenWidth > 320 && screenWidth < 786:
      maxCardNumber = 5
      break;

    default:

  }

  const [cardsLimit, setCardsLimit] = useState(maxCardNumber);



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
      <div className="movies-card-list__pagination">
        <button className="movies-card-list__append-button">
          Еще
        </button>
      </div>
    </section>
  );
};

export default MoviesCardList;