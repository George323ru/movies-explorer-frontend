function filterShotFilms(films) {
  const filteredShotFilms = films.filter((item) => {

    const { duration } = item;
    return duration <= 40;
  })
  return filteredShotFilms
};

export default filterShotFilms;