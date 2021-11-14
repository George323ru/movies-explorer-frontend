function searchFilm(data, movieInput) {

  return data.filter((item) => {
    const filmNameEN = item.nameEN && item.nameEN.toLowerCase();
    const filmNameRU = item.nameRU && item.nameRU.toLowerCase();

    return (
      (filmNameRU && filmNameRU.includes(movieInput))
      || (filmNameEN && filmNameEN.includes(movieInput))
    )
  })
}

export default searchFilm;