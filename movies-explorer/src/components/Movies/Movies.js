import "./Movies.css";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import moviesApi from "../../utils/MoviesApi"
import Preloader from "./Preloader/Preloader";
import { useEffect, useState } from "react";

const Movies = () => {
  const [loading, setLoading] = useState(false)
  const [movies, setMovies] = useState([])
  const [movieInput, setMovieInput] = useState("")

  const getMovieSearchInput = (dataInput) => {
    setMovieInput(dataInput.toLowerCase())

  }

  useEffect(() => {
    if (movieInput === "") {
      return null;
    } else {
      moviesApi.getBeatFilmMovies()
        .then((res) => {


          function searchFilm(data) {

            return data.filter((item) => {

              const filmNameRU = item.nameRU && item.nameRU.toLowerCase();

              return (
                filmNameRU && filmNameRU.includes(movieInput)
              )
            })
          }

          const filter = searchFilm(res)

          setLoading(false)
          setMovies(filter)
        })
    }

  }, [movieInput])

  return (
    <section className="movies">
      <div className="movies__container">
        <SearchForm handleSearchInput={getMovieSearchInput} />
        {/* <Preloader /> */}
        <MoviesCardList
          movies={movies}
          loading={loading}
        />
      </div>
    </section>
  );
};

export default Movies;