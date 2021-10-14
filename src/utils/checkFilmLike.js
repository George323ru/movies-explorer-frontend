function checkFilmLike(foundMovies, savedMovies) {

  return foundMovies.map((item) => {
    let isSaved;

    isSaved = savedMovies.some((i) => i.nameRU === item.nameRU)

    item.isSaved = isSaved;
    return item
  }
  )
}

export default checkFilmLike;