const moviesApiConfig = {
  baseUrl: "https://api.nomoreparties.co/beatfilm-movies",
  headers: {
    "Content-Type": "application/json",
  }
}

class MoviesApi {
  constructor(config) {
    this._baseUrl = config.baseUrl;
    this._headers = config.headers;
  }

  _checkingResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }

  getBeatFilmMovies() {

    return fetch(this._baseUrl, {
      headers: this._headers,
    })
      .then((res) => this._checkingResponse(res)
      )
  }
}

const moviesApi = new MoviesApi(moviesApiConfig)

export default moviesApi;