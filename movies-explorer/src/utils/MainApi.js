const mainApiConfig = {
  baseUrl: "http://api.gusevgeorgiy.me.nomoredomains.club",
  token: ""
}

class MainApi {
  constructor(config) {
    this._baseUrl = config.baseUrl;
    this._token = config.token;

  }

  _checkingResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this._token}`
      },
    }).then(this._checkingResponse);
  }

  updateUserInfo({ name, email }) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this._token}`,
      },
      body: JSON.stringify({
        name: name,
        email: email,
      }),
    }).then(this._checkingResponse);
  }

  getMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this._token}`,
      },
    }).then(this._checkingResponse);
  }

  saveMovie({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    id,
    nameRU,
    nameEN,
  }) {

    const imageUrl = `https://api.nomoreparties.co${image.url}`;

    return fetch(`${this._baseUrl}/movies`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this._token}`,
      },
      body: JSON.stringify({
        country: country,
        director: director,
        duration: duration,
        year: year,
        description: description,
        image: imageUrl,
        trailer: trailerLink,
        thumbnail: thumbnail,
        movieId: id,
        nameRU: nameRU,
        nameEN: nameEN,
      }),
    }).then(this._checkingResponse);
  }

  deleteMovie(movieId) {
    return fetch(`${this._baseUrl}/cards/${movieId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this._token}`,
      },
    }).then(this._checkingResponse);
  }


}

const mainApi = new MainApi(mainApiConfig);

export default mainApi;